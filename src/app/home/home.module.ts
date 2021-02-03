import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { CountrySelectComponent } from './country-select/country-select.component';
import { RegionSelectComponent } from './region-select/region-select.component';
import { RegionSelectFlatComponent } from './region-select/region-select-flat/region-select-flat.component';
import { RegionSelectGroupedComponent } from './region-select/region-select-grouped/region-select-grouped.component';


@NgModule({
  declarations: [HomeComponent, CountrySelectComponent, RegionSelectComponent, RegionSelectFlatComponent, RegionSelectGroupedComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
