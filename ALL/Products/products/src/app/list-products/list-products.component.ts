import { Component, OnInit } from '@angular/core';

import { ProductsServiceService } from '../products-service.service';

import { IProduct } from './product.model'; 

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  flag: Boolean=false;      //flag ::condition for showing image

  // buttonText: String="SHOW IMAGE";

  products:IProduct[];

 
 

  constructor( private productObject:ProductsServiceService ) { }

  

  ngOnInit() 
  {
    //  this.products= this.productObject.getProduct();

    this.productObject.getProduct()
      .subscribe((data)=>{
        this.products=JSON.parse(JSON.stringify(data));
      })

  }

  // toggleImage()
  // {
  //   if(this.flag)
  //   {
  //     this.flag=false;
  //     this.buttonText="SHOW IMAGE"
  //   }
  //   else
  //   {
  //     this.flag=true;
  //     this.buttonText="HIDE IMAGE";
  //   }
  // }

  toggleImage(): void{
    this.flag = !this.flag;
  }

}
