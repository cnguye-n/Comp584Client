import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather {
  constructor(http: HttpClient) {}
}
