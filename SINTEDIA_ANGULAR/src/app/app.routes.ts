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
import { Crear1Component } from './crear-1/crear-1.component';
import { Crear2Component } from './crear-2/crear-2.component';
import { Crear3Component } from './crear-3/crear-3.component';
import { Listas1Component } from './listas-1/listas-1.component';
import { Listas2Component } from './listas-2/listas-2.component';
import { SonidosComponent } from './sonidos/sonidos.component';
import { CodigoDeConductaComponent } from './codigo-de-conducta/codigo-de-conducta.component';
import { ToastrModule } from 'ngx-toastr';


export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'sintetizadores1', component: Sintetizadores1Component},
    { path: 'sintetizadores2', component: Sintetizadores2Component},
    { path: 'sintetizadores3', component: Sintetizadores3Component},
    { path: 'register', component: RegistroComponent},
    { path: 'iniciarSesion', component: IniciarSesionComponent},
    { path: 'acerca-de-sintedia', component: AcercaDeSintediaComponent},
    { path: 'crear1', component: Crear1Component},
    { path: 'crear2', component: Crear2Component},
    { path: 'crear3', component: Crear3Component},
    { path: 'listas1', component: Listas1Component },
    { path: 'listas2', component: Listas2Component},
    { path:'sonidos', component: SonidosComponent},
    { path: 'conducta', component: CodigoDeConductaComponent},
    { path: 'acerca', component: AcercaDeSintediaComponent},
    { path: "**", redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
