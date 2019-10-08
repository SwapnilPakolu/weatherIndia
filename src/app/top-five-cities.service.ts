import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TopFiveCitiesService {

  constructor(private http:HttpClient) { }

    getTopCities(//tempList:BehaviorSubject<Array<any>>,
      //humidityList:BehaviorSubject<Array<any>>,
      //windList:BehaviorSubject<Array<any>>,
      completeList:BehaviorSubject<Array<any>>)
  {


   this.getJson(//tempList,humidityList,windList,
    completeList).subscribe();
   
   
  }
    getJson(//tempList:BehaviorSubject<Array<any>>,
      //humidityList:BehaviorSubject<Array<any>>,
      //wildList:BehaviorSubject<Array<any>>,
      completeList:BehaviorSubject<Array<any>>)
  {
      return this.http.get('./assets/cities.json').pipe(map(value=>
        {
          let data=value["cities"];
          console.log(data);
          for(let i=0;i<data.length;i++)
          {
            this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${data[i]}&units=metric&appid=25a0801691214cdec4c44e5b125b6396`)
            .subscribe(v=>{
              console.log(v);
              //tempList.next(tempList.getValue().concat([[v["name"],v["main"]["temp"]]]).sort((a,b)=>{return b[1]-a[1];}));
              //humidityList.next(humidityList.getValue().concat([[v["name"],v["main"]["humidity"]]]).sort((a,b)=>{return b[1]-a[1];}));
              //windList.next(windList.getValue().concat([[v["name"],v["wind"]["speed"]]]).sort((a,b)=>{return b[1]-a[1];}));
              //completeList.next(completeList.getValue().concat([[v["name"],v]]));
              completeList.next(completeList.getValue().concat(
                [{'name':v["name"],
                'main':v["weather"][0]["main"],
                'temperature':v["main"]["temp"],
                'humidity':v["main"]["humidity"],
                'wind':v['wind']['speed']
              }]
                ));
            });
          }                                                                                       
        }
        ));
  }
}
