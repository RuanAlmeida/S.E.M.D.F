import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageMapComponent } from './page-map/page-map.component';
import { AcompanhamentoComponent } from './acompanhamento/acompanhamento.component';
import { HelpComponent } from './help/help.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: PageMapComponent },
  { path: 'acomp', component: AcompanhamentoComponent },
  { path: 'help', component: HelpComponent },
  { path: 'admin', component: PageAdminComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
