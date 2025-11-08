import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar {
  menu = [
    { icon: 'fa-route', label: 'Rutas', path: '/rutas' },
    { icon: 'fa-truck', label: 'Vehículos', path: '/vehiculos' },
    { icon: 'fa-bell', label: 'Notificaciones', path: '/notificaciones' },
    { icon: 'fa-user', label: 'Usuarios', path: '/usuarios' }
  ];
}
