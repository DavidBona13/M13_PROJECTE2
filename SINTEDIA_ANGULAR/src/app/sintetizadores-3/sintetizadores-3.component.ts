import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Articles } from '../model/Articles';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { Subject, throwError } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InicioComponent } from '../inicio/inicio.component';
import { AppComponent } from '../app.component';
import { ServicesURLService } from '../services-url.service';

@Component({
  selector: 'app-sintetizadores-3',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sintetizadores-3.component.html',
  styleUrls: ['./sintetizadores-3.component.css'],
  imports: [CommonModule] 
})
export class Sintetizadores3Component implements OnInit {

  //articles: Articles | undefined;
  articles: Articles | undefined;
  titol: string | undefined;
  descripcio: string | undefined;
  
  private unsubscribe$ = new Subject<void>(); 

  constructor(
    private articlesService: ServicesURLService,
    private toast: ToastrService,
    private route : ActivatedRoute
  ) { }

  /*
  ngOnInit(): void {
    this.getArticle(this.articles?.id);
    console.log(this.articles);
  }*/

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      console.log('Article ID from route:', id);
      if (id) {
        this.getArticle(id);
      }
    });
  }

  getArticle(id: number): void {
    this.articlesService.artId(id).subscribe(
      (data: Articles) => {
        this.articles = data;
        console.log(this.articles);
        console.log('Article data:', this.articles);
      },
      error => {
        console.error('Error fetching article', error);
      }
    );
  }
/*
  getArticle(id: any): void {
    id = this.route.snapshot.params['id'];
  
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
  }*/

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
