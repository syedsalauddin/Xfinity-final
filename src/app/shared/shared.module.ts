import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterAreaComponent } from './filter-area/filter-area.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [FilterAreaComponent, NavBarComponent, FooterComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[
    FilterAreaComponent, NavBarComponent, FooterComponent
  ]
})
export class SharedModule { }
