import { Cep, CepServiceService } from './../../cep-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Cadastro, dadosCartao } from './cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

   cep: Cep = {
    cep: '',
    logradouro: '',
    localidade: '',
    bairro: '',
    uf:''

  }



  @Input() cadastro: Cadastro = {
        id: 0,
        nome: '',
        email: '',
        tel: '',

        endereco: {
          ...this.cep,

          cidade: '',
          complemento: '',
          numero: '',
        },

        funcao: '',
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

  // @Input() APIcep : Cep = {
  //   cep: '',
  //   logradouro: '',
  //   localidade: '',
  //   bairro: '',
  //   uf: ''
  // }






  constructor(
    private service: CadastroService,
    // private cepService: CepServiceService
    ) {}

  ngOnInit(): void{
    this.service.listar().subscribe((cadastro) => {
      this.cadastro = cadastro
    });
    this.service.listarPg().subscribe((dadosCartao) => {
      this.dadosCartao = dadosCartao
    })
    // this.cepService.getCEP().subscribe((Cep) => {
    //   this.APIcep = Cep
    // })


  }

}
