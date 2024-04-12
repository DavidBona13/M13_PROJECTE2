import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pagina1Component } from './pagina-1/pagina-1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Pagina1Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //implements AfterViewInit
  condition = true;
  text = '';
  title = 'SINTEDIA';
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