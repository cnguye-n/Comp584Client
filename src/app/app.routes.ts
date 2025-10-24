import { Routes } from '@angular/router';
import { Weather } from './weather/weather';
import { Home } from './home/home';
import { Country } from './country/country';
import { City } from './city/city';
import { CountryPopulation } from './country-population/country-population';

export const routes: Routes = [
    { path: '', component: Home, pathMatch: 'full' },
    { path: 'weather', component: Weather },
    { path: 'city', component: City },
    { path: 'country', component: Country },
    { path: 'country-population/:id', component: CountryPopulation }
];