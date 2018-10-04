import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers : [ProductsService] // we also have to mention in providers for creating services

})
export class ProductsComponent implements OnInit {


  pagetitle: string= "Product-List";

  products : any = []; // if we dont know what data type to specify we can use generic datatype any.
  filterBy : string;



showhideimage : boolean = true;


  constructor( private _productservice : ProductsService) { }

  ngOnInit() {
    this._productservice.getProducts().subscribe((data) => {

      this.products=data;
    
    });

    
  }
  toggleImage(): void{ //not neccesary to give void its the way we define the function.


    this.showhideimage = !this.showhideimage;
    
  }
  ratingfnParent(data:string){

    console.log(data);
    
  }

}
