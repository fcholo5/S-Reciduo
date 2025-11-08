import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';
import { Rutas } from './services/rutas';
import { Vehiculos } from './services/vehiculos';
import { Notificaciones } from './services/notificaciones';
import { Usuarios } from './components/usuarios/usuarios';


export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'rutas', component: Rutas },
  { path: 'vehiculos', component: Vehiculos },
  { path: 'notificaciones', component: Notificaciones },
  { path: 'usuarios', component: Usuarios },

  // RUTA 404 (opcional)
  { path: '**', redirectTo: '/dashboard' }
];
