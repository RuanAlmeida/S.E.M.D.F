import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';



@Component({
  selector: 'semdf-page-map',
  templateUrl: './page-map.component.html',
  styleUrls: ['./page-map.component.scss']
})
export class PageMapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;


  constructor() { }


  ngOnInit() {
  }

}
