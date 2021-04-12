import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ NetworkComponent} from './network/network.component';
import{ ShopComponent} from './shop/shop.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { PageComponent } from './page.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './shop/product/product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NetworkComponent, ShopComponent, PageComponent, ProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[PageComponent]
})
export class PageModule { }
