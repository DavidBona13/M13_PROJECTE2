import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';


export const routes: Routes = [];

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