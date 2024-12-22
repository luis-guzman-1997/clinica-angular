import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  imports: [],
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.scss'
})
export class MensajeComponent {

  @Input() titulo="";
  @Input() subTitulo=""

}
