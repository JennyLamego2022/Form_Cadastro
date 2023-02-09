import { Component, Input, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Cadastro, dadosCartao } from './cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  @Input() cadastro: Cadastro = {
    id:0,
    nome: '',
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

  constructor() {}

  ngOnInit(): void{

  }

}
