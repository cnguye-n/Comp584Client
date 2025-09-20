import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../weather-data';
@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather {
  forecasts: WeatherData[] = [];
  constructor(http: HttpClient) {
    http.get<WeatherData[]>('http://localhost:5033/weatherforecast').subscribe(result => {
      console.log(result);
      this.forecasts = result;
    });
  } 
}
