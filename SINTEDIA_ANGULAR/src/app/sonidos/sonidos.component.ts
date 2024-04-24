import { AfterViewInit, ChangeDetectionStrategy} from '@angular/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sonidos',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './sonidos.component.html',
  styleUrl: './sonidos.component.css'
})
export class SonidosComponent {

}
