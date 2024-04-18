import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crear-2',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  templateUrl: './crear-2.component.html',
  styleUrl: './crear-2.component.css'
})

export class Crear2Component {

}
