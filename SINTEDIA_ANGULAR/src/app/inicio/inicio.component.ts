import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sintetizadores1Component } from '../sintetizadores-1/sintetizadores-1.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-inicio',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Sintetizadores1Component],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent {
  condition = true;
  text = '';
  title = 'SINTEDIA_ANGULAR';

}
