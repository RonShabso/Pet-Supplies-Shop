import { Component, OnInit } from '@angular/core';
declare var require: any;
declare var createProductPage: any;
import products from 'src/assets/js/myjson.json';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
	createProductPage(JSON.parse(window.localStorage.getItem('theProduct')))
  }

}
