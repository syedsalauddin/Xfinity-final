import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  brands: any;
  products: any[];
  isLoading:boolean =  true;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.brands = {
      heading: 'Brands',
      elements: [
        { id: 'DEVICE', name: 'DEVICES' },
        { id: 'TABLET', name: 'TABLETS' },
        { id: 'SMART_WATCH', name: 'SMART_WATCHES' },
        { id: 'ACCESSORIES', name: 'ACCESSORIES' },
      ],
    };

    this.loadPage('DEVICE');
    
  }

  loadOptionSelected(selectedOption) {
    this.isLoading = true;
    this.loadPage(selectedOption);
   
  }

  loadPage(optionSelected) {
    this.http
      .get(
        'https://pcat.mobile.xfinity.com/products?category=' + optionSelected
      )
      .subscribe((response) => {
        this.products = response['products'];
        this.isLoading = false;
      });
  }
}
