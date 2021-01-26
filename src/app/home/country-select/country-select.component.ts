import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../../mock-places';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.css']
})
export class CountrySelectComponent implements OnInit {
  @Input() supportedCountries: Country[];
  @Output() selectedCountryChange: EventEmitter<any> = new EventEmitter();
  selectedCountry: Country;
  constructor() { }

  ngOnInit(): void {
  }

  onCountrySelectChange(): void {
    this.selectedCountryChange.emit(this.selectedCountry);
  }
}
