import { Component, OnInit } from '@angular/core';
import { WeatherService  } from "../../Services/weather.service";
@Component({
  selector: 'app-card-design',
  templateUrl: './card-design.component.html',
  styleUrls: ['./card-design.component.css']
})
export class CardDesignComponent implements OnInit {
  infoOfAhmedabad:Object;
  constructor(private weatherService:WeatherService) { }
  cityName; 
  weatherDescription;
  humidity; pressure; weather; date;
  cityName1; 
  weatherDescription1;
  humidity1; pressure1; weather1; date1;
  cityName2; 
  weatherDescription2;
  humidity2; pressure2; weather2; date2;
  ngOnInit(): void {
    this.weatherService.getInfo().subscribe((result)=>{
      let cityName = result["city"].name;
      let weatherDescription = result["list"][0].weather[0].description;
      let humidity = result["list"][0].main.humidity;
      let pressure = result["list"][0].main.pressure;   
      let weather = result["list"][0].weather[0].main; 
      let date = result['list'][0].dt_txt;
      //console.log(countryName);
      this.cityName=cityName;
      this.weatherDescription=weatherDescription;
      this.humidity=humidity;
      // console.log(humidity);
      this.pressure=pressure;
      this.weather=weather;
      this.date=date;
      
    });
    this.weatherService.getInfoOfDelhi().subscribe((result1)=>{
      let cityName1 = result1["city"].name;
      let weatherDescription1 = result1["list"][0].weather[0].description;
      let humidity1 = result1["list"][0].main.humidity;
      let pressure1 = result1["list"][0].main.pressure;   
      let weather1 = result1["list"][0].weather[0].main; 
      let date1 = result1['list'][0].dt_txt;
      //console.log(countryName);
      this.cityName1=cityName1;
      this.weatherDescription1=weatherDescription1;
      this.humidity1=humidity1;
      // console.log(humidity);
      this.pressure1=pressure1;
      this.weather1=weather1;
      this.date1=date1;
      
    });
    this.weatherService.getInfoOfMumbai().subscribe((result2)=>{
      let cityName2 = result2["city"].name;
      let weatherDescription2 = result2["list"][0].weather[0].description;
      let humidity2 = result2["list"][0].main.humidity;
      let pressure2 = result2["list"][0].main.pressure;   
      let weather2 = result2["list"][0].weather[0].main; 
      let date2 = result2['list'][0].dt_txt;
      //console.log(countryName);
      this.cityName2=cityName2;
      this.weatherDescription2=weatherDescription2;
      this.humidity2=humidity2;
      // console.log(humidity);
      this.pressure2=pressure2;
      this.weather2=weather2;
      this.date2=date2;
      
    });
  }

}
