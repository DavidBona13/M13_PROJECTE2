import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Articles } from '../model/Articles';
import { ServicesComponent } from '../services/services.component';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { Subject, throwError } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InicioComponent } from '../inicio/inicio.component';
import { AppComponent } from '../app.component';
import { of } from 'rxjs';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';


@Component({
  selector: 'app-sintetizadores-3',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sintetizadores-3.component.html',
  styleUrls: ['./sintetizadores-3.component.css'],
  imports: [CommonModule, RouterLink, RouterOutlet,  AppComponent, InicioComponent] 
})
export class Sintetizadores3Component implements OnInit {

  articles: Articles | undefined;
  titol: string | undefined;
  descripcio: string | undefined;
  
  private unsubscribe$ = new Subject<void>(); 

  constructor(
    private articlesService: ServicesComponent,
    private toast: ToastrService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getArticle();
  }
/*
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }*/

/*
  getArticle(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convertir a número
      this.articlesService.artId(id)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          data => {
            this.articles = data;
            console.log(this.articles);
          },
          err => {
            this.toast.error(err.message, "Error", { timeOut: 3000, positionClass: "toast-top-center" });
            return throwError(err); 
          }
        );
    });
  }*/

  getArticleId(): void {
    idArt : Number;
    const id = this.route.snapshot.params['id'];
    this.articlesService.artId(id).subscribe
  }
  
  getArticle(): void {
    const id = this.route.snapshot.params['id'];
  
    if (!id) {
      this.toast.error("Invalid article ID", "Error", { timeOut: 3000, positionClass: "toast-top-center" });
      return;
    }
    this.articlesService.artId(id)
      .subscribe(
        data => {
          this.articles = data;
          console.log(this.articles);
        },
        err => {
          this.toast.error(err.message, "Error", { timeOut: 3000, positionClass: "toast-top-center"});
          return throwError(err); 
        }
        
      );
  }

  /*
  getArticle(): void {
    const titol = this.activatedRoute.snapshot.params['titol'];
    this.articlesService.getArtTitol(titol)
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(
        data => {
          this.articles = data;
          console.log(this.articles);
        },
        err => {
          this.toast.error(err.message, "Error", { timeOut: 3000, positionClass: "toast-top-center"});
          return throwError(err); 
        }
      );
  }*/
}
