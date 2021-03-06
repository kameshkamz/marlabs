import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import{ RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductsPipe } from './products/products.pipe';
import { RatingComponent } from './products/rating/rating.component';
import { HomeComponent } from './auth/home/home.component';
import { NavigationComponent } from './auth/navigation/navigation.component';
import { DetailComponent } from './products/detail/detail.component';
import { CreateComponent } from './products/create/create.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsPipe,
    RatingComponent,
    HomeComponent,
    NavigationComponent,
    DetailComponent,
    CreateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   HttpClientModule,
   RouterModule.forRoot([
    
     {path:"products", component: ProductsComponent, 
     children:[
       {path:"create", component: CreateComponent}
      ]},

     // {path:"create", component: CreateComponent},
     {path:"products/:pCode", component:DetailComponent},
     {path:"home", component: HomeComponent},
     {path:"login", component:LoginComponent},
     {path:"", redirectTo:"home", pathMatch:"full"},
     {path:"**", redirectTo:"home"},
     
   ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
