import { Injectable } from '@angular/core';
import { StaticProduct } from '../model/static-product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  prdList!: StaticProduct[]
  constructor() {
    this.prdList = [
    { id: 1, name: 'p1', price: 100, quantity: 1, imgUrl: 'https://picsum.photos/2000/1100', categoryId: 1 },
    { id: 2, name: 'p2', price: 110, quantity: 2, imgUrl: 'https://picsum.photos/2000/1200', categoryId: 2 },
    { id: 3, name: 'p3', price: 120, quantity: 0, imgUrl: 'https://picsum.photos/2000/1300', categoryId: 3 },
    { id: 4, name: 'p4', price: 130, quantity: 4, imgUrl: 'https://picsum.photos/2000/1400', categoryId: 4 },
    { id: 5, name: 'p5', price: 140, quantity: 5, imgUrl: 'https://picsum.photos/2000/1500', categoryId: 1 },
    { id: 6, name: 'p6', price: 150, quantity: 6, imgUrl: 'https://picsum.photos/2000/1600', categoryId: 1 },
    ]
  }
  getAll(): StaticProduct[] {
    return this.prdList
  }
  getAllByCatId(catId: number): StaticProduct[] {
    if (catId == 0)
    return this.prdList
    else
    return this.prdList.filter(prd => prd.categoryId == catId)
  }
  getById(id: number): StaticProduct | null {

    let foundPrd = this.prdList.find(prd => prd.id == id)
    return foundPrd ? foundPrd : null
  }
  add(prd:StaticProduct){
    this.prdList.push(prd)
  }
}
