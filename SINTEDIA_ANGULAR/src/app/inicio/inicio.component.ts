import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  selector: 'app-inicio',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  imports: [CommonModule, RouterLink, Sintetizadores3Component, RouterOutlet]
})

export class InicioComponent implements OnInit {
  articles: Articles[] = [];
  private unsubscribe$ = new Subject<void>(); 

  constructor(
    private servicesComponent: ServicesComponent,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }
/*
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }*/

 getArticles(): void {
    this.servicesComponent.list()
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

  limitText(text: string, limit: number): string {
    const words = text.split(' ');
    if (words.length > limit) {
        return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  }
/*
  toArticle(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/sintetizadores3', id]);
    } else {
      this.toast.error("Article ID is undefined", "Error", { timeOut: 3000, positionClass: "toast-top-center" });
    }
  }*/

  
}
