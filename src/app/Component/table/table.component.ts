import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HttpClient} from "@angular/common/http";


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}


/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
//  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];


  displayedColumns: string[] = [
    "At (date-time)",
    "Temperature min/max (C)",
    "Pressure",
    "Humidity",
    "Forecast",
    "Pic",
    "Wind speed (m/s)",

  ];

  dataSource: MatTableDataSource<UserData>;
  temp_dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(        private http: HttpClient,
    private location: Location,
    private route: ActivatedRoute) {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }


  flag:boolean;


  private apiCityUrl;
  cityNameValue = '';
  dataCity: any = {};

  getCityData() {
    return this.http.get(this.apiCityUrl)
 //       .map((res: Response) => res.json())
}

getCityTest() {
    this.getCityData().subscribe(dataCity => {
      this.flag=true;
        console.log(dataCity);
        this.dataCity = dataCity;
        this.temp_dataSource.data=this.dataCity.list;
        this.temp_dataSource.paginator = this.paginator;
      this.temp_dataSource.sort = this.sort;
    })
}



  getCityForecast(cityName) {
    console.log(cityName);
    this.apiCityUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=metric&appid=110ff02ed24ccd819801248373c3b208';
}


  onEnter(value: string) {
    this.cityNameValue = value;
    console.log(this.cityNameValue);
//    this.router.navigate(['./city-name/'+this.cityNameValue]);
    this.getCityForecast(this.cityNameValue);
        this.getCityTest();
        this.getCityData();
  }



  ngOnInit(): void {



    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.temp_dataSource.filter =filterValue.trim();
    if(this.temp_dataSource.filteredData.length==0)
    {
      //console.log('in1');
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }

  }

}



/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };

}
