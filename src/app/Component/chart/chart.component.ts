import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../Services/weather.service";
import { Chart } from 'chart.js';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  countryName; population; coordinates; dateTime; tempMax; tempMin; humidity; pressure; seaLevel; groundLevel; temp; chart = []; weather; weatherDesc; windDeg; windSpeed; date;
  constructor(private _weatherService: WeatherService) { }

  
  ngOnInit(): void {
    this._weatherService.getInfo().subscribe((result) => {
      let countryName = result["city"].name;
      let population = result["city"].population;
      let coordinates = `${result["city"].coord.lat} ${result["city"].coord.lon}`;
      let temp_max = result["list"].map(res => res.main.temp_max);
      let temp_min = result["list"].map(res => res.main.temp_min);
      let humidity = result["list"][0].main.humidity;
      let pressure = result["list"][0].main.pressure;
      let seaLevel = result["list"][0].main.sea_level;
      let groundLevel = result["list"][0].main.grnd_level;
      let temp = result["list"][0].main.temp;
      let weatherDates = result["list"].map(res => res.dt_txt);
      let date = result["list"][0].dt_txt;
      let weather = result["list"][0].weather[0].main;
      let weatherDesc = result["list"][0].weather[0].description;
      let windDeg = result["list"][0].wind.deg;
      let windSpeed = result["list"][0].wind.speed;

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: weatherDates,
          datasets: [
            {
              data: temp_max,
              borderColor: '#3cba9f', 
              fill: false
              // blue color
            },
            {
              data: temp_min,
              borderColor: '#ffcc00',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }]
          }
        }
      })

      this.countryName = countryName;
      this.population = population;
      this.coordinates = coordinates;
      this.humidity = humidity;
      this.pressure = pressure;
      this.seaLevel = seaLevel;
      this.groundLevel = groundLevel;
      this.temp = temp;
      this.weather = weather;
      this.weatherDesc = weatherDesc;
      this.windDeg = windDeg;
      this.windSpeed = windSpeed;
      this.date = date;
    });


  }

}
