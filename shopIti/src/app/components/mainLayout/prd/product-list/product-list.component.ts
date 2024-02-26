import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StaticProduct } from 'src/app/model/static-product';
import { PrdService } from 'src/app/services/prd.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
//,DoCheck,AfterContentInit,AfterViewInit,OnDestroy
export class ProductListComponent implements OnInit, OnChanges { //implements OnInit,OnChanges
  // //#region params
  //   prdList!: StaticProduct[]
  //   selectedCatId: number=0;
  //   prdListOfCat!: StaticProduct[]
  //   @Input() sentCatId:number=0
  //   @Output() totalPriceChanged!:EventEmitter<number> 
  //   totalPrice:number=0
  //   dateNow!: Date
  // //#endregion

  // //#region ctor

  //   constructor() {
  //     this.prdList = [
  //       { id: 1, name: 'p1', price: 100, quantity: 1, imgUrl: 'https://picsum.photos/2000/1100', categoryId: 100 },
  //       { id: 2, name: 'p2', price: 110, quantity: 2, imgUrl: 'https://picsum.photos/2000/1200', categoryId: 200 },
  //       { id: 3, name: 'p3', price: 120, quantity: 0, imgUrl: 'https://picsum.photos/2000/1300', categoryId: 300 },
  //       { id: 4, name: 'p4', price: 130, quantity: 4, imgUrl: 'https://picsum.photos/2000/1400', categoryId: 400 },
  //       { id: 5, name: 'p5', price: 140, quantity: 5, imgUrl: 'https://picsum.photos/2000/1500', categoryId: 200 },
  //       { id: 6, name: 'p6', price: 150, quantity: 6, imgUrl: 'https://picsum.photos/2000/1600', categoryId: 300},
  //     ]
  //     this.totalPriceChanged=new EventEmitter<number>()
  //     this.dateNow = new Date()
  //   }
  // //#endregion

  // //#region life cycle

  //   // ngOnDestroy(): void {
  //   //   console.log('OnDestroy')
  //   // }
  //   // ngAfterViewInit(): void {
  //   //   console.log('AfterViewInit')
  //   // }
  //   // ngAfterContentInit(): void {
  //   //   console.log('AfterContentInit')
  //   // }
  //   // ngDoCheck(): void {
  //   //   console.log('DoCheck')
  //   // }
  //   // ngOnInit(): void {
  //   //   this.prdListOfCat=this.prdList
  //   // }
  //   //#endregion

  // //#region filter

  //   ngOnInit(): void {
  //     this.prdListOfCat=this.prdList
  //   }

  //   ngOnChanges(): void {
  //     this.filterByCat()
  //   }
  //   private filterByCat() {
  //     if (this.sentCatId == 0) {
  //       this.prdListOfCat = this.prdList
  //     } else {
  //       this.prdListOfCat = this.prdList.filter(prd => prd.categoryId == this.sentCatId)
  //       console.log(this.sentCatId)
  //     }
  //   }
  // //#endregion

  // //#region buy

  //   buy(prdPrice: number, count: any) {
  //     this.totalPrice += Number(count) * prdPrice
  //     this.totalPriceChanged.emit(this.totalPrice)
  //   }
  // //#endregion

  // //#region crud before service

  // prdList!: StaticProduct[]
  // constructor() {
  //   this.prdList = [
  //   { id: 1, name: 'p1', price: 100, quantity: 1, imgUrl: 'https://picsum.photos/2000/1100', categoryId: 1 },
  //   { id: 2, name: 'p2', price: 110, quantity: 2, imgUrl: 'https://picsum.photos/2000/1200', categoryId: 2 },
  //   { id: 3, name: 'p3', price: 120, quantity: 0, imgUrl: 'https://picsum.photos/2000/1300', categoryId: 3 },
  //   { id: 4, name: 'p4', price: 130, quantity: 4, imgUrl: 'https://picsum.photos/2000/1400', categoryId: 4 },
  //   { id: 5, name: 'p5', price: 140, quantity: 5, imgUrl: 'https://picsum.photos/2000/1500', categoryId: 1 },
  //   { id: 6, name: 'p6', price: 150, quantity: 6, imgUrl: 'https://picsum.photos/2000/1600', categoryId: 1 },
  //   ]
  // }
  // getAll(): StaticProduct[] {
  //   return this.prdList
  // }
  // getAllByCatId(catId: number): StaticProduct[] {
  //   if (catId == 0)
  //   return this.prdList
  //   else
  //   return this.prdList.filter(prd => prd.categoryId == catId)
  // }
  // getById(id: number): StaticProduct | null {

  //   let foundPrd = this.prdList.find(prd => prd.id == id)
  //   return foundPrd ? foundPrd : null
  // }
  // add(prd:StaticProduct){
  //   this.prdList.push(prd)
  // }
  // //#endregion


  // prdList!: IProducts[] // sent to service
  prdListOfCat: StaticProduct[] = []
  totalPrice: number = 0
  dateNow!: Date
  @Input() sentCatId!: number
  @Output() totalPriceChanged!: EventEmitter<number>
  constructor(
    private prd:PrdService,
    // private productService: ProductsService, 
    private router: Router) {
    this.dateNow = new Date()
    this.totalPriceChanged = new EventEmitter<number>()
  }
  ngOnChanges(): void {
    // this.prdListOfCat = this.productService.getAllByCatId(+this.sentCatId)
    this.prd.getByCat(+this.sentCatId).subscribe(x=>this.prdListOfCat=x)
  }
  ngOnInit(): void {
    this.prd.get().subscribe(x=>this.prdListOfCat=x)
  }
  buy(prdPrice: number, count: any) {
    this.totalPrice += +count * prdPrice
    this.totalPriceChanged.emit(this.totalPrice)
  }
  showDetails(pid: number) {
    this.router.navigate(['/products', pid])
  }
  deleteProduct(id1:number){
    this.prd.delete(id1).subscribe(x=>x.id=id1)
  }
}
