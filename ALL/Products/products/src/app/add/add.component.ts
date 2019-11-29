import { Component, OnInit } from '@angular/core';

import { IProduct } from '../list-products/product.model'; 

import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {



  constructor( private productService:ProductsServiceService ) { }

  productItem = new IProduct(null, null, null, null, null, null, null, null);

  ngOnInit() {
  }

  addProduct()
  {
    this.productService.newProduct(this.productItem);
    alert("SUCCESS");
  }

}
