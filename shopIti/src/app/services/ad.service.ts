import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  adsList: string[]
  constructor() {
    this.adsList = [
      "big discounts",
      "sale up to 50%",
      "friday offers",
      "special Offer"
      // "",
    ]
  }
  //return new Observable(()=>{})
  // getAds(adsInSec: number): Observable<string> {
  //   return new Observable<string>(x => {
  //     // x.next();x.error();x.complete()
  //     let counter = 0
  //     let adsTimer = setInterval(() => {
  //       if (counter == this.adsList.length ) {
  //         x.complete()
  //       }
  //       else if (this.adsList[counter] == '') {
  //         x.error('empty ads')
  //       }
  //       else {
  //         x.next(this.adsList[counter])
  //         counter++
  //       }
  //     }, adsInSec * 1000);
  //   })
  // }
  getSerialAds():Observable<string>{
    return from(this.adsList) // from database list
    // return of("a","b","c") // of this objects
  }
}



