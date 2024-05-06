import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sintetizadores1Component } from '../sintetizadores-1/sintetizadores-1.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Articles } from '../model/Articles';
import { ServicesComponent } from '../services/services.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Sintetizadores1Component],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent implements OnInit {
  articles: Articles[] = [];

  constructor(private servicesComponent: ServicesComponent,
              private toast: ToastService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
/*
  ngOnInit(): void {
    this.get
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ServicesComponent.list().subscribe(
      (data: Articles[]) => {
        this.articles = data;
        console.log(this.articles);
      },
      (error) => {
        console.log(error);
      }
    )
  }*/
}
