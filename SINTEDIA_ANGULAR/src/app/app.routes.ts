import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import path from 'node:path';
import { InicioComponent } from './inicio/inicio.component';
import { Sintetizadores1Component } from './sintetizadores-1/sintetizadores-1.component';


export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'sintetizadores1', component: Sintetizadores1Component}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
