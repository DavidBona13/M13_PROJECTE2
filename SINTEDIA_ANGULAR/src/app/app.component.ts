import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  styleUrl: './app.component.css'
})

export class AppComponent {
  condition = true;
  title = 'SINTEDIA_ANGULAR';
}
