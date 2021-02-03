import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionSelectGroupedComponent } from './region-select-grouped.component';

describe('RegionSelectGroupedComponent', () => {
  let component: RegionSelectGroupedComponent;
  let fixture: ComponentFixture<RegionSelectGroupedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionSelectGroupedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionSelectGroupedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
