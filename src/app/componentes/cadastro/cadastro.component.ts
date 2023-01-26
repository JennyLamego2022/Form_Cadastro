import { Component, Input } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Cadastro, dadosCartao } from './cadastro';

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
    logradouro: '',
    nomeCard: '',
    bandeira: '',
    cvc: '',
    validade: ''
  };

  @Input() dadosCartao: dadosCartao = {
    numero: '',
    cvc: '',
    nomeCard: '',
    validade: ''
  }

  constructor(private service: CadastroService ) {}

  ngOnInit(): void{
    this.service.listar().subscribe((Cadastro) => {
      this.cadastro = Cadastro
    })
  }

}
