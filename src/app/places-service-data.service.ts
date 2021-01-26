import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Country, SUPPORTED_COUNTRIES, COUNTRIES_DATA} from "./mock-places"

@Injectable({
  providedIn: 'root'
})
export class PlacesServiceDataService implements InMemoryDbService {
  createDb() {
    const countries = SUPPORTED_COUNTRIES;
    const data = COUNTRIES_DATA;
    return {countries, data};
  }
  constructor() { }
}