import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sintetizadores-1',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  templateUrl: './sintetizadores-1.component.html',
  styleUrl: './sintetizadores-1.component.css'
})
export class Sintetizadores1Component {

}
