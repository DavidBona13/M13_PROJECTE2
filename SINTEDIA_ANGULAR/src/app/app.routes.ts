import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Component, NgModule } from '@angular/core';
import { InicioComponent } from './dashboard/inicio/inicio.component';
import { RegistroComponent } from './dashboard/registro/registro.component';


export const routes: Routes = [
    { path: 'inicio', redirectTo: 'inicio', pathMatch: 'full' }, // Redirige a 'dashboard' por defecto
    { path: 'dashboard', component: DashboardComponent, children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirige a 'inicio' dentro de 'dashboard'
      { path: 'inicio', component: InicioComponent },
      { path: 'registro', component: RegistroComponent }
    ]}
  ];

  /*
  export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full'},
    { path: 'inicio', component: InicioComponent },
    { path: 'registro', component: RegistroComponent}
];*/


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
/*
export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent, children: [
     { path: 'inicio', component: InicioComponent },
     { path: 'registro', component: RegistroComponent}
    ]},
];*/

/*
export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full'},
    { path: 'inicio', component: InicioComponent },
    { path: 'registro', component: RegistroComponent}
];*/