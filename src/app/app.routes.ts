import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from "./components/usuario/usuario.routes";


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'usuario/:id', component: UsuarioComponent, children: USUARIO_ROUTES },
    { path: '**', component: HomeComponent }

];


export const  APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
