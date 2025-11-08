import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from "../sidebar/sidebar";
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, Sidebar, Navbar],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  barrio = {
    nombre: 'Barrio Santiago',
    estado: 'En camino',
    hora: '8:00 AM'
  };

  notificacion = "El camión 'Camión 5' se dirige a la ubicación de tu barrio";
}
