import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { StaticProduct } from 'src/app/model/static-product';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  currPrdId: number=1
  prd!: StaticProduct | null
  prdIdsList: number[] = []
  constructor(
    private activateRoute: ActivatedRoute
    , private prdService: ProductsService
    , private router: Router
    , private location: Location) { }
  ngOnInit(): void {
    this.prdIdsList = this.prdService.getPrdIds()
    this.prd = this.prdService.getById(this.currPrdId)
    // this.prd=this.prdService.getById(this.currPrdId)
    this.currPrdId = Number(this.activateRoute.snapshot.paramMap.get('pid'))
    this.activateRoute.paramMap.subscribe(x => this.currPrdId = Number(x.get('pid')))
  }
  goBack() {
    this.location.back()
    this.prd = this.prdService.getById(this.currPrdId)
    console.log(this.currPrdId)
  }
  goPrev() {
    let currentIndex = this.prdIdsList.findIndex(x => x == this.currPrdId)
    console.log(currentIndex)
    let prevIndex
    if (currentIndex > 0) {
      prevIndex = this.prdIdsList[currentIndex - 1]
      
      this.router.navigate(['/products', prevIndex])
      this.prd = this.prdService.getById(this.currPrdId)
    }
  }
  goNext() {
    let currentIndex = this.prdIdsList.findIndex(x => x == this.currPrdId)
    let nextIndex
    if (currentIndex < this.prdIdsList.length) {
      nextIndex = this.prdIdsList[currentIndex + 1]
      this.router.navigate(['/products', nextIndex])
      this.prd = this.prdService.getById(this.currPrdId)
    }
  }
}
