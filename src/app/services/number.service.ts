import { Injectable } from '@angular/core';
import {Observable, Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  id: unknown;

  constructor() { }

  public getNumbers(): Observable<number> {
    return new Observable<number>((subscriber: Subscriber<number>) => {

      let i = 0;
      this.id = setInterval(() => {
        console.log('service:'+i)
        subscriber.next(i);

        if( i == 10 ) {
          subscriber.complete();
          this.clear();
        }
        i++;
      }, 1000);

    })
  }

  public clear(): void {
    clearInterval(this.id as number);
  }
}
