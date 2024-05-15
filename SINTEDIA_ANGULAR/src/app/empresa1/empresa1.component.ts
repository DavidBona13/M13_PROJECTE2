import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-empresa1',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, AppComponent],
  templateUrl: './empresa1.component.html',
  styleUrl: './empresa1.component.css'
})
export class Empresa1Component {

}

