import { Component } from '@angular/core';
import { Data } from 'src/app/views/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cartData!:Data  //static data
  cartData2!:Data
  constructor(){
    this.cartData=new Data('p1','https://picsum.photos/2000/1100','d1',4,1000,['b1','b2','b3']) //constructor
    this.cartData2=new Data('p1','https://picsum.photos/2000/1100','d1',4,1000,['b1','b2','b3']) //constructor
  }
}
