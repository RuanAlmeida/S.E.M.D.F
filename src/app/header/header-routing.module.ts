import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const headerRoutes: Routes = [

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
 }
