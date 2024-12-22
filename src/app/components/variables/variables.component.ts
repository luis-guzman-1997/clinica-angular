import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [CommonModule],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.scss'
})
export class VariablesComponent {

  //nombre de dato:tipo de dato = 'Valor que se le va asociar'
  nombre: string = 'Luis Guzman';
  edad: number = 27;
  salario:number = 1200;
  tecnologiaFavorita:string = 'Angular 19';
  tecnologias: string[] = [this.tecnologiaFavorita, 'React', 'Vue'];

  empleados: any[] = [
    {nombre:'Luis', edad:27, salario:1000},
    {nombre:'Oscar', edad:30, salario:1200},
    {nombre:'Rodrigo', edad:24, salario:2000},
    {nombre:'Bryan', edad:31, salario:5000}
  ];

}
