import { Component, Input } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Cadastro } from './cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  @Input() cadastro: Cadastro = {
    nome: 'Cadu',
    email: '',
    tel: '',
    cep: '',
    endereco: 'Rua Olimpia do Couto',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    funcao: 'debito',
    logradouro: ''
  };

  constructor(private service: CadastroService ) {}

  ngOnInit(): void{
    this.service.listar().subscribe((Cadastro) => {
      this.cadastro = Cadastro
    })
  }

}
