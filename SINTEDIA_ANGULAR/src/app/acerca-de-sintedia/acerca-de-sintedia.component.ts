import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-acerca-de-sintedia',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './acerca-de-sintedia.component.html',
  styleUrl: './acerca-de-sintedia.component.css'
})
export class AcercaDeSintediaComponent {

}
