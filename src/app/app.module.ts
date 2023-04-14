import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HardysoftskillsComponent } from './hardysoftskills/hardysoftskills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobremiComponent,
    LoginComponent,
    RedesComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardysoftskillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
