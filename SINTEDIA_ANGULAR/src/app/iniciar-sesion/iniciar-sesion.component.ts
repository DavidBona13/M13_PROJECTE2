import { AfterViewInit, ChangeDetectionStrategy} from '@angular/core';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ServicesURLService } from '../services-url.service';
import { Usuario } from '../model/Usuario';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  title = 'SINTEDIA'

  email: string = '';
  pwd: string = '';

  constructor(private services: ServicesURLService,private toast: ToastrService,
    private router: Router) {}

  login() {
    this.services.iniciSesio(this.email, this.pwd).subscribe(
      response => {
        console.log('Login correcto', response);
        // Guarda el token o maneja la sesión del usuario
        this.toast.success('Inicio de sesión correcto', 'Registro Exitoso');

        this.router.navigate(['']);
      },
      error => {
        console.error('Error al iniciar sesión', error);
        // Muestra un mensaje de error
        this.toast.error('Error al iniciar sesión', 'Error');
      }
    );
  }
}
