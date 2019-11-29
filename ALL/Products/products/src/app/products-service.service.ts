import { Injectable } from '@angular/core';

// import { IProduct } from './list-products/product.model';

import {HttpClient} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(public http:HttpClient) { }

  getProduct()
  {
    return this.http.get("http://localhost:3000/products");
  }

  newProduct(item)
  {
    return this.http.post("http://localhost:3000/insert", {"product":item})
      .subscribe( (data)=>{    console.log("RESPONSE : " + JSON.parse(JSON.stringify(data)))   });
  }
}
