import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from 'express';
import { Articles } from '../model/Articles';
import { ServicesComponent } from '../services/services.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sintetizadores-3',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sintetizadores-3.component.html',
  styleUrl: './sintetizadores-3.component.css'
})
export class Sintetizadores3Component implements OnInit{

articles: Articles | undefined;

constructor(
  private articlesService: ServicesComponent,
  private toast: ToastrService,
  private router: Router,
  private activatedRoute: ActivatedRoute
) {}

ngOnInit(): void {
    this.getArticle();
}

getArticle(): void{
  const id = this.activatedRoute.snapshot.params['id'];
  this.articlesService.artId(id).subscribe(
    data => {
      this.articles = data;
      console.log(this.articles);
    },
    err => {
      this.toast.error(err.message, "Error", { timeOut: 3000, positionClass: "toast-top-center"});

    }

  )
}

}
