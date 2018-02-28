import { Component, OnInit } from '@angular/core';
declare var $: any;



@Component({
  selector: 'semdf-page-map',
  templateUrl: './page-map.component.html',
  styleUrls: ['./page-map.component.scss']
})
export class PageMapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

    
  locais: local[] = [
    {
      nome: 'teste 1',
      lat: -15.7601,
      lng: -47.9392
    },
    {
      nome: 'teste 2',
      lat: -15.7201,
      lng: -47.9892
    },
    {
      nome: 'teste 3',
      lat: -15.7301,
      lng: -47.4492
    }
  ]

  constructor() { }


  ngOnInit() {

    $(document).ready(function() { $('ul.tabs').tabs(); });
  }

}

interface local{
  nome?: string
  lat: number
  lng: number
}
