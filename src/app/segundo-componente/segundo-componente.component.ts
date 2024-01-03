import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css'
})

export class SegundoComponenteComponent {
  nome = "Leandro";
  dataNascimento = "1999-10-05";
  urlImg = "/assets/img/foto_leandro.jpg";

  mostrarData() {
    alert(`A data de nascimento do ${this.nome} é ${this.dataNascimento}`)
  }
} 
