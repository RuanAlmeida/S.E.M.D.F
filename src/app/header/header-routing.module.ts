import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';


const headerRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
  // {
  //   path: 'cadastro/save',
  //   component: CadastroComponent
  // },
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

export class HeaderRouteingModule {}
