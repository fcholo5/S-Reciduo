import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-vehiculos',
  standalone: true,
  imports: [CommonModule, Navbar],
  templateUrl: './vehiculos.html',
  styleUrls: ['./vehiculos.css']
})
export class Vehiculos {
  vehiculos = [
    { id: 1, nombre: 'Camión 1', placa: 'ABC-123', estado: 'Activo' },
    { id: 2, nombre: 'Camión 2', placa: 'XYZ-789', estado: 'Mantenimiento' }
  ];
}
