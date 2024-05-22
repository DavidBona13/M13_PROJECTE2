import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Articles } from '../model/Articles';
import { ToastrService } from 'ngx-toastr';
import { Subject, throwError } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Sintetizadores3Component } from '../sintetizadores-3/sintetizadores-3.component';
import { AppComponent } from '../app.component';
import { ServicesURLService } from '../services-url.service';
import Swal from 'sweetalert2';


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
    private services: ServicesURLService,
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
    this.services.list()
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

  eliminar(id: number): void {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás desacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar"
  }).then((result) => {
    if(result.value) {
      this.services.deleteArticle(id).subscribe(
        () => {
          Swal.fire(
            'Deleted!',
            'Your article has been deleted.',
            'success'
          ); })
        
      console.log('Artículo eliminado ' + id);

    }else if(result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'canceled',
        'Artículo no eliminado',
        'error'
      )
    }
  });
  }
  
}
