import { Component, Input, OnChanges,SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../../../mock-places';

@Component({
  selector: 'app-region-select-grouped',
  templateUrl: './region-select-grouped.component.html',
  styleUrls: ['./region-select-grouped.component.css']
})
export class RegionSelectGroupedComponent implements OnChanges {
  @Input() places: Observable<Place[]>;
  placesOptions: Place[];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue, previousValue } = changes.places;
    if (currentValue !== previousValue) {
      currentValue.subscribe((data: Place[]) => this.placesOptions = data);
    }
  }

}
