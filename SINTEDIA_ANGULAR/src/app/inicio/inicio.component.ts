import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { Articles } from '../model/Articles';
import { ToastrService } from 'ngx-toastr';
import { Subject, throwError } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  imports: [CommonModule]
})

export class InicioComponent implements OnInit, OnDestroy {
  articles: Articles[] = [];
  private unsubscribe$ = new Subject<void>(); // Subject para notificar la finalización

  constructor(
    private httpClient: HttpClient,
    private servicesComponent: ServicesComponent, // Inyecta ServicesComponent aquí
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getArticles(): void {
    this.servicesComponent.list()
      .pipe(
        takeUntil(this.unsubscribe$) // Desuscribirse cuando se complete el Subject
      )
      .subscribe(
        (data: Articles[]) => {
          this.articles = data;
          console.log(this.articles);
        },
        error => {
          this.toast.error(error.message, "Error", { timeOut: 3000, positionClass: "toast-top-center"});
          return throwError(error); 
        }
      );
  }
}
