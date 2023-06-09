import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../weather/weather.module';

@Injectable({
  providedIn: 'root'
})
export class YService {

  constructor(private  http : HttpClient ) { }

  getWeatherData(cityName : string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherAPIBaseUrl+cityName,{
      headers : new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue)
    });
  }

  getVenkyData(name : string) {
    return name;
  }
}
