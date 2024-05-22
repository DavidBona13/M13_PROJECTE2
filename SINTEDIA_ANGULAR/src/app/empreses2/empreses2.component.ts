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
  selector: 'app-empreses2',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './empreses2.component.html',
  styleUrl: './empreses2.component.css',
  imports: [CommonModule]
})
export class Empreses2Component implements OnInit{
  arti: Articles | undefined;
  private unsubscribe$ = new Subject<void>(); 

  constructor(
    private articlesService: ServicesURLService,
    private toast: ToastrService,
    private route : ActivatedRoute
  ) { }

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
        this.arti = data;
        console.log(this.arti);
        console.log('Article data:', this.arti);
      },
      error => {
        console.error('Error fetching article', error);
      }
    );
  }
}
