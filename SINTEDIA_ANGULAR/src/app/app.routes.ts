import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import path from 'node:path';
import { InicioComponent } from './inicio/inicio.component';
import { Sintetizadores1Component } from './sintetizadores-1/sintetizadores-1.component';
import { Sintetizadores2Component } from './sintetizadores-2/sintetizadores-2.component';
import { Sintetizadores3Component } from './sintetizadores-3/sintetizadores-3.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { AcercaDeSintediaComponent } from './acerca-de-sintedia/acerca-de-sintedia.component';


export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'sintetizadores1', component: Sintetizadores1Component},
    { path: 'sintetizadores2', component: Sintetizadores2Component},
    { path: 'sintetizadores3', component: Sintetizadores3Component},
    { path: 'register', component: RegistroComponent},
    { path: 'iniciarSesion', component: IniciarSesionComponent},
    { path: 'acerca-de-sintedia', component: AcercaDeSintediaComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
