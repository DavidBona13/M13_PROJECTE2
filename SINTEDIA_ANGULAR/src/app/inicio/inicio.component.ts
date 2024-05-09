import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sintetizadores1Component } from '../sintetizadores-1/sintetizadores-1.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Articles } from '../model/Articles';
import { ServicesComponent } from '../services/services.component';
import { throwError, timeout } from 'rxjs';
import { ToastService } from 'path/to/toast.service';


@Component({
  selector: 'app-inicio',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Sintetizadores1Component],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent implements OnInit {
  articles: Articles[] = [];

  constructor(
    private servicesComponent: ServicesComponent,
    private toast: ToastService
  ) { }
  ngOnInit(): void {
  }

  getArticles(): void {
    this.servicesComponent.list().subscribe(
      (data: Articles[]) => {
        this.articles = data;
        console.log(this.articles);
      },
      error => {
        // Manejar el error
        this.toast.error(error.message, "Error", { timeOut: 3000, positionClass: "toast-top-center"});
        return throwError(error); // Propagar el error para que pueda ser manejado en el componente que llama a getArticles
      }
    );
  }
}
