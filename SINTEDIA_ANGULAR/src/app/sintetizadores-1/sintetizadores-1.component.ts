import { AfterViewInit, ChangeDetectionStrategy} from '@angular/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sintetizadores2Component } from '../sintetizadores-2/sintetizadores-2.component';
import { RouterLink } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-sintetizadores-1',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Sintetizadores2Component, RouterLink, InicioComponent],
  templateUrl: './sintetizadores-1.component.html',
  styleUrl: './sintetizadores-1.component.css'
})
export class Sintetizadores1Component {
  title = 'SINTEDIA'
}
