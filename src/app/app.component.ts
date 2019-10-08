import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { TopFiveCitiesService } from "./top-five-cities.service";
import { BehaviorSubject } from "rxjs";
import { debounceTime } from "rxjs/operators";
//import {FloorPipe} from './pipes/floor.pipe'
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<weatherElement> = new MatTableDataSource<
    weatherElement
  >(ELEMENT_DATA);
  //complete:any ;

  title = "weatherIndia";
  
  // tempList: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  // humidityList: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  // windList: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
   completeList: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  // hotest = [["", ""]];
  // coolest = [["", ""]];
  // mostHumid = [["", ""]];
  // mostWindy = [["", ""]];
  // driest = [["", ""]];
  constructor(private tpfc: TopFiveCitiesService) {}
  
  ngOnInit() {
    // this.tempList
    //   .pipe(debounceTime(1000))
    //   .subscribe(value => (this.hotest = value.slice(0, 5)));

    // this.tempList.pipe(debounceTime(1000)).subscribe(
    //   value =>
    //     (this.coolest = value
    //       .slice()
    //       .reverse()
    //       .slice(0, 5))
    // );

    // this.humidityList
    //   .pipe(debounceTime(1000))
    //   .subscribe(value => (this.mostHumid = value.slice(0, 5)));
    // this.humidityList.pipe(debounceTime(1000)).subscribe(
    //   value =>
    //     (this.driest = value
    //       .slice()
    //       .reverse()
    //       .slice(0, 5))
    // );

    // this.windList
    //   .pipe(debounceTime(1000))
    //   .subscribe(value => (this.mostWindy = value.slice(0, 5)));

    // this.completeList.pipe(debounceTime(1000)).subscribe(value => {
    //   this.complete = value;
    //   console.log(this.complete);
    //   this.dataSource = new MatTableDataSource(this.complete);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });

     this.tpfc.getTopCities(
    //   this.tempList,
    //   this.humidityList,
    //   this.windList,
       this.completeList
     );

    //this.dataSource = new MatTableDataSource(this.complete);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    //.subscribe(v=>{console.log(v)});
  }
}

export interface weatherElement {
  name: string;
  main: string;
  temperature: number;
  humidity: number;
  wind: number;
}

const ELEMENT_DATA: weatherElement[] = [
  { name: "Pune", main: "Rain", temperature: 22.41, humidity: 85, wind: 1.52 },
  { name: "Bhopal", main: "Haze", temperature: 25, humidity: 83, wind: 1.5 },
  {
    name: "Itanagar",
    main: "Rain",
    temperature: 21.61,
    humidity: 95,
    wind: 1.38
  },
  {
    name: "Aurangabad",
    main: "Haze",
    temperature: 23,
    humidity: 94,
    wind: 1.5
  },
  { name: "Patna", main: "Mist", temperature: 26, humidity: 83, wind: 2.1 },
  {
    name: "Mumbai",
    main: "Thunderstorm",
    temperature: 31.36,
    humidity: 70,
    wind: 2.6
  },
  { name: "Shimla", main: "Clouds", temperature: 24, humidity: 83, wind: 1 },
  {
    name: "Hyderabad",
    main: "Rain",
    temperature: 24.12,
    humidity: 88,
    wind: 3.1
  },
  { name: "Delhi", main: "Haze", temperature: 28.65, humidity: 57, wind: 1.99 },
  {
    name: "Chennai",
    main: "Clouds",
    temperature: 29.25,
    humidity: 83,
    wind: 2.6
  },
  { name: "Gandhinagar", main: "Haze", temperature: 29, humidity: 74, wind: 1 },
  { name: "Kolkata", main: "Haze", temperature: 26, humidity: 94, wind: 2.14 },
  { name: "Lucknow", main: "Haze", temperature: 26, humidity: 83, wind: 1.93 },
  {
    name: "Dehradun",
    main: "Clear",
    temperature: 16.51,
    humidity: 84,
    wind: 1.87
  }
];
