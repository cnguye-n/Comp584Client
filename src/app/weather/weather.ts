import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../weather-data';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-weather',
  imports: [AsyncPipe],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})

export class Weather {
  weather: any;
  forecasts$: Observable<WeatherData[]> | undefined;

  constructor(http: HttpClient) {
    this.forecasts$ = http.get<WeatherData[]>('http://localhost:5033/weatherforecast');
  }
    
  
}
