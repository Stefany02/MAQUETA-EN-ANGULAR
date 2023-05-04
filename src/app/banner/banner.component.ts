import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log("banner",data);
      this.miPortfolio=data.BannerComponent;
    });
  }

  }

