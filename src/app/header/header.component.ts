import { Component, OnInit, EventEmitter } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import { Router } from '@angular/router';




@Component({
  moduleId: 'module.id',
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

   direcao: string;

 modalActions = new EventEmitter<string|MaterializeAction>();
  openModal(direcoes :string) {
    this.modalActions.emit({action:"modal",params:['open']});
    this.direcao = direcoes;
  }


  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  dirCam() {
    if(this.direcao == 'matricula'){
    this.router.navigate(['/map'])
    this.modalActions.emit({action:"modal",params:['close']});}
    else
    {
      this.router.navigate(['/acomp'])
      this.modalActions.emit({action:"modal",params:['close']});
    }
  }


}
