import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country, Place } from '../mock-places';
import { PlacesService } from '../places-service/places.service';

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

  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit(): void {
    this.placesService.getSupportedCountries().subscribe((data: Country[]) => {
      this.supportedCountries = data;
    });
  }

  onSelectedCountryChange(data: Country) {
    this.selectedCountry = data;
    this.placesService.getCountryData(this.selectedCountry.id).subscribe((country: Country) => this.countryData = country);
    this.placesService.getCountryChildren(this.selectedCountry.id).subscribe((children: Place[]) => this.countryChildren = children);
  }

  onSelectedRegionChange(data: Place) {
    console.log(data);
    this.selectedRegion = data;
  }

  onRegionBtnClick() {
    this.router.navigate(['/place'], { queryParams: { place_id: this.selectedRegion.id } });
  }

}
