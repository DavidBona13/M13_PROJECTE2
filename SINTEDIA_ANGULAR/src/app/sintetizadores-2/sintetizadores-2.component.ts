import { AfterViewInit, ChangeDetectionStrategy} from '@angular/core';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Sintetizadores3Component } from '../sintetizadores-3/sintetizadores-3.component';

@Component({
  selector: 'app-sintetizadores-2',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, Sintetizadores3Component],
  templateUrl: './sintetizadores-2.component.html',
  styleUrl: './sintetizadores-2.component.css'
})
export class Sintetizadores2Component {

}
