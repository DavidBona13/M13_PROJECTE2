import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Articles } from '../model/Articles';
import { ServicesComponent } from '../services/services.component';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { Subject, throwError } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-sintetizadores-3',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sintetizadores-3.component.html',
  styleUrls: ['./sintetizadores-3.component.css'],
  imports: [CommonModule, RouterLink, InicioComponent ] 
})
export class Sintetizadores3Component implements OnInit, OnDestroy {

  article: Articles | undefined;
  private unsubscribe$ = new Subject<void>(); 

  constructor(
    private articlesService: ServicesComponent,
    private toast: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getArticle(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.articlesService.artId(id)
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(
        data => {
          this.article = data;
          console.log(this.article);
        },
        err => {
          this.toast.error(err.message, "Error", { timeOut: 3000, positionClass: "toast-top-center"});
          return throwError(err); 
        }
      );
  }
}
