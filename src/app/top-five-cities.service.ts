import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import { weatherInterface } from './weatherInterface';


@Injectable({
  providedIn: 'root'
})
export class TopFiveCitiesService {

  constructor(private http:HttpClient) { }

    getTopCities(completeList:BehaviorSubject<Array<any>>)
  {


   this.getJson(completeList).subscribe();
   
   
  }
    getJson(completeList:BehaviorSubject<weatherInterface[]>)
  {
      return this.http.get('./assets/cities.json').pipe(map(value=>
        {
          let data=value["cities"];
          
          for(let i=0;i<data.length;i++)
          {
            this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${data[i]}&units=metric&appid=25a0801691214cdec4c44e5b125b6396`)
            .subscribe(v=>{

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
