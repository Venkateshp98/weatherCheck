import { Component, OnInit } from '@angular/core';
import { YService } from './service/y.service';
import { WeatherData } from './weather/weather.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private weatherService : YService){
    
  }

  cityName : string = 'wellington'
  weatherData? : WeatherData


  ngOnInit(): void {
    this.getWeatherData (this.cityName);

  }

  onSubmit(){
    this.getWeatherData (this.cityName);
    this.cityName ='';
  }
  
  private getWeatherData(cityName : string){
  this.weatherService.getWeatherData(cityName)
  .subscribe({
    next: (response) => {
      this.weatherData = response;
      console.log(response);
    }
  })
}
}
