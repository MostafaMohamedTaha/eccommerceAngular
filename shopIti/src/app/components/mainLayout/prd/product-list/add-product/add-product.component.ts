import { PrdService } from 'src/app/services/prd.service';
import { Component, OnInit } from '@angular/core';
import { StaticProduct } from 'src/app/model/static-product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent{
  showToaster:boolean=false
  constructor(private prd:PrdService,private route:Router){}

  addProduct(){
    const prd1:StaticProduct={
      id: 100,
      name: 'p100',
      price: 100,
      quantity: 1,
      imgUrl: 'https://picsum.photos/2000/1100',
      categoryId: 1
    }
    this.prd.add(prd1).subscribe(x=>{
      this.showToaster=true
      setTimeout(() => {
        this.showToaster = false;
        this.route.navigateByUrl('/products')
      }, 5000);
      return x
    })
  }
  
}
