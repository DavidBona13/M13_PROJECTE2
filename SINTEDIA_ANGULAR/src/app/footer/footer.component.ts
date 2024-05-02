import { Component } from '@angular/core';
import { AcercaDeSintediaComponent } from '../acerca-de-sintedia/acerca-de-sintedia.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CodigoDeConductaComponent } from '../codigo-de-conducta/codigo-de-conducta.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AcercaDeSintediaComponent, RouterLink, CodigoDeConductaComponent, AcercaDeSintediaComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {

}
