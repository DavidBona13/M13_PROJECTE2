import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { ServicesURLService } from '../services-url.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink,CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  condition = true;
  text = '';
  title = 'SINTEDIA';

  usuario: Usuario;
  pwd2: string | undefined;

  constructor(
    private services: ServicesURLService,
    private toast: ToastrService,
    private router: Router
  ) { this.usuario = new Usuario(0, '', '', '', [], []); }

  register() {
    if (this.usuario.pwd !== this.pwd2) {
      this.toast.error('Las contraseñas no coinciden', 'Error de Registro'); //toast error
      return; //trenca el mètode
    }
    this.services.addUser(this.usuario).subscribe(
      response => {
        console.log('Usuario registrado exitosamente', response); //missatge terminal
        this.toast.success('Usuario registrado exitosamente', 'Registro Exitoso'); //toast d'èxit

        this.router.navigate(['/iniciarSesion']); 
      },
      error => {
        console.error('Error al registrar el usuario', error); //missatge terminal
        this.toast.error('Error al registrar el usuario', 'Error'); //toast d'error
      }
    );
  }
}
