import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http : HttpClient) { }

  getProducts(){
      return this._http.get("http://localhost:3000/getproducts")
     
  }
}



// http request in angular 2 
// Steps for making http request 1. run the nodejs and create the file server.js 2.Add http request in products.service.ts
//using http get method and use it

