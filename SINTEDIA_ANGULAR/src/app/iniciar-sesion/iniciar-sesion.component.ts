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
    this.services.iniciSesio(this.email, this.pwd).subscribe( //classe servei, truca al mètode de iniciar sesió que es connecta amb el backend.
      response => {
        console.log('Login correcto', response);
        this.toast.success('Inicio de sesión correcto', 'Registro Exitoso'); //toast d'exit.

        this.router.navigate(['']); //el botó navega a la pàgina inici (no té path).
      },
      error => {
        console.error('Error al iniciar sesión', error); 
        this.toast.error('Error al iniciar sesión', 'Error'); //Si no inicia correctament, sortirà un toast.
      }
    );
  }
}
