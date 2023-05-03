import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HardysoftskillsComponent } from './hardysoftskills/hardysoftskills.component';
import { ErrorComponent } from './error/error.component';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RedesdashboardComponent } from './redesdashboard/redesdashboard.component';
import { BannerdashboardComponent } from './bannerdashboard/bannerdashboard.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobremiComponent,
    RedesComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardysoftskillsComponent,
    ErrorComponent,
    NavbarDashboardComponent,
    DashboardComponent,
    RedesdashboardComponent,
    BannerdashboardComponent,
    PortfolioComponent,
    IniciarSesionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
