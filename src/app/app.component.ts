import { Component, OnInit } from '@angular/core';
import { Observable, interval, of } from 'rxjs';
import {concatMap, delay, filter, map, mergeMap, take, tap} from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  redTrainCalled:number = 0;
  yellowTrainCalled:number = 0;
  title = 'buy';

  ngOnInit(): void {
    // interval(1000).pipe(
    //   take(10),
    //   map(value => value % 2 === 0 ? "red" : "yellow"),
    //   tap((color: 'red' | 'yellow') => console.log(`La lumiere s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
    //   concatMap((color: 'red' | 'yellow') => this.getTrainObservable$(color)),
    //   tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrive !`, `font-weight:bold; color:${this.translateColor(train.color)}` ))
    // ).subscribe()
  }

  getTrainObservable$(color: 'red' | 'yellow') {
    const isRedTrain = color === 'red';
    isRedTrain ? this.redTrainCalled++ : this.yellowTrainCalled++;
    const trainIndex = isRedTrain ? this.redTrainCalled : this.yellowTrainCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'red' | 'yellow'):'red' | 'yellow'{
    return color === 'red' ? "red" : "yellow"
  }
}
