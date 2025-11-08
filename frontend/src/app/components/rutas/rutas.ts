import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-rutas',
  standalone: true,
  imports: [CommonModule, Navbar],
  templateUrl: './rutas.html',
  styleUrls: ['./rutas.css']
})
export class Rutas {
  rutas = [
    { id: 1, nombre: 'Ruta 1', estado: 'Activa', hora: '8:00 AM' },
    { id: 2, nombre: 'Ruta 2', estado: 'Pendiente', hora: '10:30 AM' }
  ];
}
