import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionSelectFlatComponent } from './region-select-flat.component';

describe('RegionSelectFlatComponent', () => {
  let component: RegionSelectFlatComponent;
  let fixture: ComponentFixture<RegionSelectFlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionSelectFlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionSelectFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
