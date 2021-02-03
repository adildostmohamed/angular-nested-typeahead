import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, toArray, flatMap } from 'rxjs/operators';
import { Country, Place } from '../mock-places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  COUNTRY_VOL_THRESHOLD = 1000;
  PLACE_VOL_THRESHOLD = 1000;
  private supportedCountriesUrl = 'api/countries';
  private countriesDataUrl = 'api/data';
  constructor(private http: HttpClient) { }

  getCountryData(countryCode: string): Observable<Country> {
    return this.http.get<Country>(`${this.countriesDataUrl}/${countryCode}`);
  }

  getCountryChildren(countryCode: string): Observable<Place[]> {
    // get the child regions for a country by countryCode
    return this.http.get<Country>(`${this.countriesDataUrl}/${countryCode}`).pipe(
      // map over each of the child regions and create an update response with the
      // main region merged with the child options for display to the user
      map((country: Country): Place[] => {
        return country.children.map((child: Place): Place => {
          // pull off the place related properties from the admin_level_1
          // to add to the newly created country options array to return
          const { name_best, name_en, admin_level, volume, id } = child;
          // new array to hold the new list of options for the selected country
          const countryOptions = [];
          // check if the admin level 1 is disabled
          const disabled = child.volume < this.PLACE_VOL_THRESHOLD;
          // add the level 1 to the new array of options
          countryOptions.push({name_best, name_en, admin_level, volume, id, disabled});
          // map over any admin level 2 options
          // check if they are disabled
          // push them to the new options array
          if (country.supportedAdminLevel === 2 || country.supportedAdminLevel === 3) {
            child.children.map((childPlace: Place) => {
              // tslint:disable-next-line: no-shadowed-variable
              const { name_best, name_en, admin_level, volume, id } = childPlace;
              const disabledChildPlace = child.volume < this.PLACE_VOL_THRESHOLD;
              if (childPlace.children?.length > 0) {
                childPlace.children.map((grandChildPlace: Place) => {
                  // tslint:disable-next-line: no-shadowed-variable
                  const { name_best, name_en, admin_level, volume, id } = grandChildPlace;
                  const disabledGrandChildPlace = child.volume < this.PLACE_VOL_THRESHOLD;
                  return countryOptions.push({name_best, name_en, admin_level, volume, id, disabled: disabledGrandChildPlace});
                });
              }
              return countryOptions.push({name_best, name_en, admin_level, volume, id, disabled: disabledChildPlace});
            });
            return {...child, disabled, children: countryOptions};
          }
          // send back the admin level option with the updated child options
          return {...child, disabled};
        });
      })
    );
  }

  getSupportedCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.supportedCountriesUrl).pipe(
      flatMap((data: Country[]) => data = data),
      map((country: Country) => {
        const disabled = country.volume < this.COUNTRY_VOL_THRESHOLD;
        return {...country, disabled };
      }),
      toArray()
    );
  }
}
