import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { PageMapComponent } from '../page-map/page-map.component';
import { PageAdminComponent } from '../page-admin/page-admin.component';
import {MaterializeDirective} from "angular2-materialize";

const headerRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'map',
    component: PageMapComponent
  },
  {
    path: 'administracao',
    component: PageAdminComponent
  }
  // {
  //   path: 'cadastro/save/:id',
  //   component: CadastroComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(headerRoutes)
  ],
  exports: [RouterModule]
})

export class HeaderRouteingModule {
   routeNames = ["Buttons", "Carousel", "Chips", "Collapsible", "Dialogs", "Dropdown", "Forms", "Tabs", "DatePicker", "Parallax", "ModelBindings"];
 }
