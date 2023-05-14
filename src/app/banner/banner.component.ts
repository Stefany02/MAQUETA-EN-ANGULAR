import { Component } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  bienvenida = 'Bienvenidos';
  saludo = 'Hola, soy Stefany Donnet';
  contenido = 'Desarrollador full stack jr.';

}
