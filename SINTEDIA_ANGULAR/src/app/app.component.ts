import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { AcercaDeSintediaComponent } from './acerca-de-sintedia/acerca-de-sintedia.component';
import { RouterLink } from '@angular/router';
import { Crear1Component } from './crear-1/crear-1.component';
import { Crear2Component } from './crear-2/crear-2.component';
import { Crear3Component } from './crear-3/crear-3.component';
import { SonidosComponent } from './sonidos/sonidos.component';
import { Sintetizadores1Component } from './sintetizadores-1/sintetizadores-1.component';
import { Sintetizadores2Component } from './sintetizadores-2/sintetizadores-2.component';
import { Sintetizadores3Component } from './sintetizadores-3/sintetizadores-3.component';
import { Listas1Component } from './listas-1/listas-1.component';
import { Listas2Component } from './listas-2/listas-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterOutlet, InicioComponent, HeaderComponent, FooterComponent, IniciarSesionComponent, RegistroComponent, AcercaDeSintediaComponent, RouterLink, SonidosComponent, Crear1Component, Listas1Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //implements AfterViewInit
  condition = true;
  text = '';
  title = 'SINTEDIA';

  conf() {
    alert('Ahora mismo la configuración no está activada');
  }
  greet() {
    alert('Debes iniciar sesión para crear artículos!');
  }

  menuOpen: boolean = false;

  openMenu() {
    this.menuOpen = true;
  }
/*
  submenuOpen = false;
  
  toggleSubmenu(event: MouseEvent) {
    this.submenuOpen = !this.submenuOpen;
    event.stopPropagation(); // Para evitar que el click se propague a otros elementos*/
  }

  /*
  ngAfterViewInit() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach((item) => {
      item.addEventListener('click', () => {
        const submenu = item.querySelector('.submenu') as HTMLElement;

        if (submenu) {
          const computedStyle = window.getComputedStyle(submenu);
          const displayValue = computedStyle.getPropertyValue('display');

          if (displayValue === 'block') {
            submenu.style.display = 'none';
          } else {
            submenu.style.display = 'block';
          }
        }
      });
    });
  }
}*/