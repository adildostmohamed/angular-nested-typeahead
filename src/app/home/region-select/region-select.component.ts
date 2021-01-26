import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Place } from '../../mock-places';

// tslint:disable-next-line: variable-name
export const _filter = (opt: Place[], value: string): Place[] => {
  if (value) {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.name_en.toLowerCase().indexOf(filterValue) === 0);
  }
};
@Component({
  selector: 'app-region-select',
  templateUrl: './region-select.component.html',
  styleUrls: ['./region-select.component.css']
})
export class RegionSelectComponent implements OnInit {
  @Input() places: Place[];
  @Output() selectedRegionChange: EventEmitter<any> = new EventEmitter();
  placesOptions: Observable<Place[]>;

  placesForm: FormGroup = this._formBuilder.group({
    places: ''
  });

  // tslint:disable-next-line: variable-name
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    // tslint:disable-next-line: no-non-null-assertion
    console.log(this.places);
    // tslint:disable-next-line: no-non-null-assertion
    this.placesOptions = this.placesForm
      .get('places')!
      .valueChanges.pipe(
        startWith(''),
        map(value => this._filterGroups(value))
      );
  }

  private _filterGroups(value: string): Place[] {
    if (value) {
      return this.places
        .map((place: Place) => ({
          ...place,
          children: _filter(place.children, value)
        }))
        .filter((places: Place) => places.children.length > 0);
    }

    return this.places;
  }

  onOptionSelected(event): void {
    this.selectedRegionChange.emit(event.option.value);
  }

  optionDisplay(option: any) {
    return option.name_en;
  }

}
