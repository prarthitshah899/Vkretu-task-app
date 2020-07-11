import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apikey = '3af54b2f2fa82b7fc7d45808fc626c2e';
  constructor(private http: HttpClient) { }
  getInfo()
  {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=ahmedabad&appid='+this.apikey);
  }
  getInfoOfDelhi()
  {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=delhi&appid='+this.apikey);
  }
  
  getInfoOfMumbai()
  {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=mumbai&appid='+this.apikey);
  }
}
