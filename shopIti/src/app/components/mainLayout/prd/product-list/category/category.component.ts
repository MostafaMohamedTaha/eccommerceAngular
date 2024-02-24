import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/model/icategory';
import { PrdService } from 'src/app/services/prd.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnChanges,OnInit{
  selectedCatId: number=0 ;
  catList: ICategory[]=[] ;
  sentCatId: number=0
  totalPriceRecieve!: number
  constructor(private cat:PrdService) {
    // this.catList = [
    //   { id: 1, name: 'c1' },
    //   { id: 2, name: 'c2' },
    //   { id: 3, name: 'c3' },
    //   { id: 4, name: 'c4' },
    // ]
    this.cat.getCat().subscribe(x=>this.catList=x)
    console.log(this.cat.getCat().subscribe(x=>this.catList=x))
  }
  ngOnInit(): void {
    this.cat.getCat().subscribe(x=>this.catList=x)
    console.log(this.cat.getCat().subscribe(x=>this.catList=x))
  }
  ngOnChanges(): void {
    console.log(this.cat.getCat().subscribe(x=>this.catList=x))
  }
  onPriceChange(price: number) {
    this.totalPriceRecieve = price
  }
}
