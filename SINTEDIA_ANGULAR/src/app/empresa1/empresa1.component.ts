import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { Articles } from '../model/Articles';
import { ToastrService } from 'ngx-toastr';
import { Subject, throwError } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { Sintetizadores3Component } from '../sintetizadores-3/sintetizadores-3.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-empresa1',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, Sintetizadores3Component, CommonModule ],
  templateUrl: './empresa1.component.html',
  styleUrl: './empresa1.component.css'
})
export class Empresa1Component implements OnInit{

  articles: Articles[] = [];
  private unsubscribe$ = new Subject<void>(); 

  constructor(
    private servicesComponent: ServicesComponent,
    private toast: ToastrService,
    private router: Router
  ) { }


  ngOnInit(): void {
      this.getEmpreses();
  }

  getEmpreses(): void {
    this.servicesComponent.artCategoria()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(
        (data: Articles[]) => {
          this.articles = data;
        },
        error => {
          this.toast.error(error.message, "Error", { timeOut: 3000, positionClass: "toast-top-center"});
          return throwError(error); 
        }
      );
  }


}

