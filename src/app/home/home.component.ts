import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ADMIN_LEVELS, Country, Place } from '../mock-places';
import { PlacesService } from '../places-service/places.service';
import { childSupportedAdminLevels } from '../utils';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  supportedCountries: Country[];
  selectedCountry: Country;
  countryData: Country;
  countryChildren: Place[];
  selectedRegion: Place;

  // tslint:disable-next-line: variable-name
  constructor(private placesService: PlacesService, private router: Router, private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.placesService.getSupportedCountries().subscribe((data: Country[]) => {
      this.supportedCountries = data;
    });
  }

  onSelectedCountryChange(data: Country) {
    this.selectedCountry = data;
    this.placesService.getCountryData(this.selectedCountry.id).subscribe((country: Country) => {
      this.countryData = country;
      if (country.supportedAdminLevel !== ADMIN_LEVELS.COUNTRY) {
        this.placesService.getCountryChildren(this.selectedCountry.id).subscribe((children: Place[]) => this.countryChildren = children);
      }
    });
  }

  onSelectedRegionChange(data: Place) {
    this.selectedRegion = data;
  }

  checkBtnDisabledState() {
    if (this.selectedCountry?.supportedAdminLevel === ADMIN_LEVELS.COUNTRY) {
      return false;
    } else if (childSupportedAdminLevels.includes(this.selectedCountry?.supportedAdminLevel)) {
      return !this.selectedRegion;
    } else {
      return true;
    }
  }

  onRegionBtnClick() {
    let snackbarMessageToShow;
    // tslint:disable-next-line: max-line-length
    const snackbarRegionMessage = `Selected ${this.selectedRegion?.name_en} (admin level = ${this.selectedRegion?.admin_level}) in ${this.selectedCountry?.name_en}`;
    const snackbarCountryMessage = `Selected ${this.selectedCountry?.name_en}`;
    if (childSupportedAdminLevels.includes(this.selectedCountry?.supportedAdminLevel)) {
      snackbarMessageToShow = snackbarRegionMessage;
    } else {
      snackbarMessageToShow = snackbarCountryMessage;
    }
    this._snackbar.open(snackbarMessageToShow, null, { duration: 5000 } );
    // this.router.navigate(['/place'], { queryParams: { place_id: this.selectedRegion.id } });
  }

}
