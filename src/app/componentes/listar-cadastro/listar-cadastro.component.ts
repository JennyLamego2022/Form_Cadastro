import { CadastroService } from './../cadastro.service';
import { Cadastro } from './../cadastro/cadastro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cadastro',
  templateUrl: './listar-cadastro.component.html',
  styleUrls: ['./listar-cadastro.component.css']
})
export class ListarCadastroComponent implements OnInit{

  listaCadastro : Cadastro[] = [
    // {
    //   id:0,
    //   nome: '',
    //   email: '',
    //   tel: '',
    //   cep: '',
    //   endereco: '',
    //   numero: '',
    //   complemento: '',
    //   bairro: '',
    //   cidade: '',
    //   uf: '',
    //   funcao: '',
    //   logradouro: '',
    //   nomeCard: '',
    //   bandeira: '',
    //   cvc: '',
    //   validade: ''
    // },
    // {
    //   id:0,
    //   nome: '2 teste',
    //   email: '',
    //   tel: '',
    //   cep: '',
    //   endereco: 'Rua Olimpia do Couto',
    //   numero: '',
    //   complemento: '',
    //   bairro: '',
    //   cidade: '',
    //   uf: '',
    //   funcao: 'debito',
    //   logradouro: '',
    //   nomeCard: '',
    //   bandeira: '',
    //   cvc: '',
    //   validade: ''
    // },

  ]

  constructor (private service: CadastroService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOninit(): void {
    // this.service.listar().subscribe((listaCadastro) => {
    //   this.listaCadastro = listaCadastro
    // })
    // this.service.listar().subscribe((listaCadastro) => {
    //   this.listaCadastro = listaCadastro
    //   console.log('API')
    // })
  }

}
