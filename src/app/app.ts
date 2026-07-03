import { Component, EventEmitter, Output, signal } from '@angular/core';

export interface IProduto{
  title: string;
  price: number;
  description: string;
  marca: string;
  estoque: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  produtos: IProduto[] = [
    {
      title: 'Computador',
      price: 5500,
      description: 'Ryzen 7, 32GB RAM e SSD 1TB',
      marca: 'Lenovo',
      estoque: 9
    },
    {
      title: 'Geladeira',
      price: 3000,
      description: 'Frost Free 400L',
      marca: 'Brastemp',
      estoque: 3
    },
    {
      title: 'Máquina de Lavar',
      price: 2800,
      description: '12kg de capacidade',
      marca: 'Lenovo',
      estoque: 9
    },
    {
      title: 'Mesa de Escritório',
      price: 800,
      description: 'Mesa em MDF com acabamento amadeirado, 1,20m de largura e duas gavetas',
      marca: 'Mesx',
      estoque: 0
    },
    {
      title: 'Álbum da Copa do Mundo',
      price: 80,
      description: 'Álbum oficial da Copa do Mundo',
      marca: 'Panini',
      estoque: 2000
    },
    {
      title: 'Teste Jr',
      price: 2,
      description: 'Atacante brasileiro habilidoso. Aquele que irá trazer o hexa',
      marca: 'Santos FC',
      estoque: 1
    }
  ]

  // name: string = 'Cadeira'; 

  name: string = 'Teste';

  handleInputChange(event: string){
    console.log(event);
    // this.name = event.toUppeCase();
  }

  botaoDinamico: string = 'Mostrar div';
  showDiv: boolean = false;

  handleBotaoDinamico(): void{
    this.showDiv = !this.showDiv;

    if(this.showDiv){
      this.botaoDinamico = 'Fechar div';
    } else{
      this.botaoDinamico = 'Mostrar div';
    }
  }

  isTruthy(){
    // return {}; <-- É um elemento verdadeiro
    // return []; <-- É um elemento verdadeiro
    // return true; <-- É um elemento verdadeiro
    // return 1; <-- É um elemento verdadeiro
    // return "teste"; <-- É um elemento verdadeiro
    // return "0"; <-- É um elemento verdadeiro
    // return "false"; <-- É um elemento verdadeiro
    // return this.pessoa.status; <-- É um elemento verdadeiro
  }

  isFalsy(){
    // return false;
    // return 0;
    // return "";
    // return '';
    // return null;
    // return undefined;
    // return -0;
    // return NaN;
    // return this.pessoa.name;
    // return this.pessoa.endereco?.rua; 
  }

}
