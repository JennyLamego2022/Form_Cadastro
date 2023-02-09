import { CepServiceService } from './../../cep-service.service';
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
    funcao: '',
    bandeira: '',
    cvc: '',
    nomeCard: '',
    validade: ''
  }






  constructor(
    private service: CadastroService,
    private cepService: CepServiceService
    ) {}

  ngOnInit(): void{
    this.service.listar().subscribe((cadastro) => {
      this.cadastro = cadastro
    });
    this.service.listarPg().subscribe((dadosCartao) => {
      this.dadosCartao = dadosCartao
    });
    // this.cepService.getCEP(cep: Cep).subscribe((Cep) => {
    //   this.cep = Cep
    // })


  }

}
