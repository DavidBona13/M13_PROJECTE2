import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegistroComponent } from '../registro/registro.component';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RegistroComponent, IniciarSesionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
