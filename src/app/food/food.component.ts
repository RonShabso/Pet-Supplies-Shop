declare var require: any;
declare var createTable: any;
import { Component, OnInit } from '@angular/core';
import products from 'src/assets/js/myjson.json';

var type=products.Food;

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
	  createTable(type);
  }

}
