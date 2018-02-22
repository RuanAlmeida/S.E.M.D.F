import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderRouteingModule } from './header/header-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PageMapComponent } from './page-map/page-map.component';
import { PageAdminComponent } from './page-admin/page-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UsuarioComponent,
    PageMapComponent,
    PageAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderRouteingModule,
    MaterializeModule,
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyBdYvR_YTgtM1HoA-n517hj7H1hzaFp2Qg'
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
