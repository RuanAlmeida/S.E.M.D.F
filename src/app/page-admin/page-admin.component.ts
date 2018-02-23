import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.scss']
})
export class PageAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() { $('ul.tabs').tabs(); });
  }

}
