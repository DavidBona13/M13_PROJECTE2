import { AfterViewInit, ChangeDetectionStrategy} from '@angular/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sintetizadores-2',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  templateUrl: './sintetizadores-2.component.html',
  styleUrl: './sintetizadores-2.component.css'
})
export class Sintetizadores2Component {

}
