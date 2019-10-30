import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weatherData
  city = ""
  // citi
  // Location
  name
  pic
  temp
  min
  max

  constructor( public weatherSer:WeatherService) 
  {
    // this.Location = weatherSer.addLocation(this.citi)
    
  }

  getLocation()
  {
    this.weatherSer.getWeather(this.city).subscribe((data) =>
      {
        this.weatherData = data
        console.log(this.weatherData);
        
        this.name = this.weatherData.weather[0].description
        console.log(this.name);

        // if(name == "clear sky")
        // {
        //   this.pic = "['http://openweathermap.org/img/wn/01d@2x.png']"
        // }
        
        
        this.temp = Math.round(this.weatherData.main.temp - 273.15);
        this.min = Math.round(this.weatherData.main.temp_min - 273.15);
        this.max = Math.round(this.weatherData.main.temp_max - 273.15);
      })
  }

}
