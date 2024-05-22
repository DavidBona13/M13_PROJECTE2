import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Articles } from '../model/Articles';
import { ToastrService } from 'ngx-toastr';
import { Subject, throwError } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Sintetizadores3Component } from '../sintetizadores-3/sintetizadores-3.component';
import { AppComponent } from '../app.component';
import { ServicesURLService } from '../services-url.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-empresa1',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './empresa1.component.html',
  styleUrl: './empresa1.component.css',
  imports: [RouterOutlet, RouterLink, Sintetizadores3Component, CommonModule]
})
export class Empresa1Component implements OnInit{

  categoria: Articles[] = [];
  private unsubscribe$ = new Subject<void>(); 

  constructor(
    private services: ServicesURLService,
    private toast: ToastrService,
    private router: Router
  ) { }


  ngOnInit(): void {
      this.getEmpreses();
  }

  getEmpreses(): void {
    this.services.artCategoria()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(
        (data: Articles[]) => {
          this.categoria = data;
        },
        error => {
          this.toast.error(error.message, "Error", { timeOut: 3000, positionClass: "toast-top-center"});
          return throwError(error); 
        }
      );
  }


}

