import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  city = ""
  // location: string
  citi = []

  constructor(public http:HttpClient) 
  { }

  getWeather(city)
  {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=d323b4650db26f9b88714787d6f09b1c')
  }

  // addLocation(location)
  // {
  //   this.citi.push({Location:location})
  // }

  getLocation()
  {
    return this.citi
  }
}
