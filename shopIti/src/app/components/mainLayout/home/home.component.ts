import { Component } from '@angular/core';
import { Subscription, catchError, filter, map, retry, take } from 'rxjs';
import { AdService } from 'src/app/services/ad.service';
import { Data } from 'src/app/views/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cartData!: Data  //static data
  cartData2!: Data
  private Subscription!: Subscription[]
  private Subscription1!: Subscription
  constructor(private ads: AdService) {
    this.cartData = new Data('p1', 'https://picsum.photos/2000/1100', 'd1', 4, 1000, ['b1', 'b2', 'b3']) //constructor
    this.cartData2 = new Data('p1', 'https://picsum.photos/2000/1100', 'd1', 4, 1000, ['b1', 'b2', 'b3']) //constructor
  }

  //subscribe({next:=>(),error:()=>{},complete:()=>{}})
  //subscribe(()=>this.list))
  // ngOnInit(): void {
    // this.Subscription1=this.ads.getSerialAds().subscribe(
    //   {
    //     next:x=>console.log(x),
    //     error:err=>console.log(err),
    //     complete:()=>{console.log('complete')}
    //   }
    // )
    // let filterAds = this.ads.getSerialAds().pipe(
    //   filter(x => x.includes("friday")),
    //   map(x => "ad:--" + x),
    // retry(3),
    // catchError((err, caught) => caught),
    // take(30)
    // ).subscribe(
    //   {
    //     next: x => console.log(x),
    //     error: err => console.log(err),
    //     complete: () => { console.log('complete') }
    //   }
    // )
    // this.Subscription.push(filterAds)
  // }
  // ngOnDestroy(): void {
  //   this.Subscription1.unsubscribe()
  // }
}
