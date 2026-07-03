import { Component, Input } from '@angular/core';
import { IProduto } from '../app'; 
// Ctrl + Espaço para autocomplete

@Component({
  selector: 'app-produto',
  standalone: false,
  templateUrl: './produto.html',
  styleUrl: './produto.scss',
})
export class Produto {
  // @Input({alias: 'Title'}) produtoTitle: string = '';
  // @Input({alias: 'Price'}) produtoPrice: number = 0;

  @Input({required: true}) produto!: IProduto;
  // ! indica que a variável será inicializada antes de ser utilizada

  isAtivo: boolean = false;
  botaoDinamico: string = 'Mais detalhes';

  buttonMostrar(): void{
    this.isAtivo = !this.isAtivo;
    if(!this.isAtivo){
      this.botaoDinamico = 'Mais detalhes';
    } else{
      this.botaoDinamico = 'Ocultar detalhes';
    }
  }
}
