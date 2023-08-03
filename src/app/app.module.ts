import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ShopModule,
    RouterModule.forRoot([
      { path: 'shop', component: ShopComponent },
      { path: 'cart', component: CartDetailComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: '**', redirectTo: "/shop" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }