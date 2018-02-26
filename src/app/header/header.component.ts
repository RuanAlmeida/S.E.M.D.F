import { Component, OnInit, EventEmitter } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';





@Component({
  moduleId: 'module.id',
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


 modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  dirMap() {
    this.modalActions.emit({action:"modal",params:['routerLink="/map"']});
  }

  // closeModal() {
  //   this.modalActions.emit({action:"modal",params:['close']});
  // }

}
