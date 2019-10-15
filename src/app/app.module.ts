import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {NgMarqueeModule} from 'ng-marquee-improved';
import {ProductService} from './home-page/product.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductDetailsService} from './product-details/product-details.service';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from './authentication.service';
import {AppService} from './app.service';
import {UserCartService} from './user-cart/user-cart.service';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import {OrderhistoryService} from './orderhistory/orderhistory.service';
import { PlacedComponent } from './placed/placed.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AddproductComponent } from './addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    NavBarComponent,
    ProductDetailsComponent,
    UserCartComponent,
    SignUpComponent,
    OrderhistoryComponent,
    PlacedComponent,
    MyprofileComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgMarqueeModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    ProductService,
    ProductDetailsService,
    AuthenticationService,
    AppService,
    UserCartService,
    OrderhistoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
