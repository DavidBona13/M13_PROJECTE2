import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Pagina1Component } from '../../pagina-1/pagina-1.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Pagina1Component],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent {
  condition = true;
  text = '';
  title = 'SINTEDIA_ANGULAR';

}
