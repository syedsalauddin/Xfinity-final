import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  reccuring: boolean;
  onetime: boolean;
  startingAmount: any;
  fullPrice: any;
  term: any;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.product.prices.forEach((element) => {
      if (element.id == 'ONETIME') {
        this.onetime = true;
        this.startingAmount = element.originalPrice;
        this.fullPrice = element.originalPrice;
      }
      if (element.id == 'RECURRING') {
        this.reccuring = true;
        this.startingAmount = element.originalPrice;
        this.term = element.term;
      }
    });
  }

  fetchProductDetails(){
   this.httpClient.get('https://pcat.mobile.xfinity.com/product/details?slug='+this.product['slug'])
   .subscribe(response=>{
      console.log(response)
   });
  }
}
