declare var require: any;
declare var createTable: any;
import { Component, OnInit } from '@angular/core';
import products from 'src/assets/js/myjson.json';
var type=products.Dogs;


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  constructor() { }
	
  ngOnInit(): void {
	  createTable(type);
  }

}
