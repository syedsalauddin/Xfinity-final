import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetworkComponent } from './page/network/network.component';
import { ShopComponent } from './page/shop/shop.component';

const routes: Routes = [
  {path:'shop', component: ShopComponent},
  {path:'', component: ShopComponent},
  {path: 'network', component: NetworkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
