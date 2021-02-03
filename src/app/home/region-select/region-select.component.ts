import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { startWith, map, filter } from 'rxjs/operators';
import { ADMIN_LEVELS, Place } from '../../mock-places';

// tslint:disable-next-line: variable-name
export const _filter = (opt: Place[], value: string): Place[] => {
  if (value) {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.name_en.toLowerCase().includes(filterValue));
  }
};
@Component({
  selector: 'app-region-select',
  templateUrl: './region-select.component.html',
  styleUrls: ['./region-select.component.css']
})
export class RegionSelectComponent implements OnChanges {
  @Input() places: Place[];
  @Input() supportedAdminLevel: ADMIN_LEVELS = 1;
  @Output() selectedRegionChange: EventEmitter<any> = new EventEmitter();
  placesOptions: Observable<Place[]>;

  placesForm: FormGroup = this._formBuilder.group({
    places: ''
  });

  // tslint:disable-next-line: variable-name
  constructor(private _formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.places?.currentValue !== changes.places?.previousValue) {
      this._resetControl();
      this._initDropdown();
    }
  }

  private _initDropdown(): void {

    if (this.supportedAdminLevel === 1) {
      // tslint:disable-next-line: no-non-null-assertion
      this.placesOptions = this.placesForm
      .get('places')!
      .valueChanges.pipe(
        startWith(''),
        map(value => this._filterFlatOptions(value))
      );
    }

    if (this.supportedAdminLevel === 2 || this.supportedAdminLevel === 3) {
      this.placesOptions = this.placesForm
      // tslint:disable-next-line: no-non-null-assertion
        .get('places')!
        .valueChanges.pipe(
          startWith(''),
          map(value => this._filterGroupedOptions(value))
        );
    }
  }

  private _resetControl(): void {
    this.placesForm.reset();
  }

  private _filterGroupedOptions(value: string | Place): Place[] {
    const filterValue = typeof value === 'string' ? value : value ? value.name_en : '';
    if (filterValue) {
      return this.places
        .map((place: Place) => ({
          ...place,
          children: _filter(place.children, filterValue)
        }))
        .filter((places: Place) => places.children.length > 0);
    }

    return this.places;
  }

  private _filterFlatOptions(value: string | Place): Place[] {
    const filterValue = typeof value === 'string' ? value : value ? value.name_en : '';
    if (filterValue) {
      return _filter(this.places, filterValue);
    }
    return this.places;
  }

  onOptionSelected(event: any): void {
    this.selectedRegionChange.emit(event.option.value);
  }

  optionDisplay(option: any) {
    if (option?.name_en) {
      return option.name_en;
    }
    return '';
  }

}
