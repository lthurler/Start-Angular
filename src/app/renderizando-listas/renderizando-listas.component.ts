import { Component } from '@angular/core';
import { Celular } from '../types/Celular';


@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrl: './renderizando-listas.component.css'
})

export class RenderizandoListasComponent {
  celulares : Celular[] = [
    
    { id: 1, nome: "celular XL",descricao: "Celular grande",esgotado: false },
    { id: 2, nome: "celular Normal",esgotado: false },
    { id: 3, nome: "celular XL",descricao: "Celular mini",esgotado: true }

  ]
}
