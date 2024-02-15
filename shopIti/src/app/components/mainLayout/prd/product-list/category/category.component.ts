import { Component, EventEmitter, Output } from '@angular/core';
import { ICategory } from 'src/app/model/icategory';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  selectedCatId: number=0;
  catList!: ICategory[];
  sentCatId!: number;
  totalPriceRecieve!:number
  // @Output() totalPriceChange!:EventEmitter<number>
  constructor() { 
    this.catList = [
      { id: 100, name: 'c1' },
      { id: 200, name: 'c2' },
      { id: 300, name: 'c3' },
      { id: 400, name: 'c4' },
    ]
    
  }
  onPriceChange(price:number){
    this.totalPriceRecieve=price
  }
}
