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
  sentCatId: number=0;
  totalPriceRecieve!:number
  // @Output() totalPriceChange!:EventEmitter<number>
  constructor() { 
    this.catList = [
      { id: 1, name: 'c1' },
      { id: 2, name: 'c2' },
      { id: 3, name: 'c3' },
      { id: 4, name: 'c4' },
    ]
    
  }
  onPriceChange(price:number){
    this.totalPriceRecieve=price
  }
}
