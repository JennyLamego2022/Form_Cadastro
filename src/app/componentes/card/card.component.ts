
import { Route, Router } from '@angular/router';
import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Cadastro, dadosCartao } from '../cadastro/cadastro';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  dadosCartao: dadosCartao = {

    numero: '',
    funcao: '',
    bandeira: '',
    cvc: '',
    nomeCard: '',
    validade: ''
  }



  constructor(
    private service: CadastroService,
    private router: Router

  ){}

  ngOnInit(): void {

  }


  cadastroDadosCard(){
    this.service.criarPG(this.dadosCartao).subscribe(() => {
      this.router.navigate(['/cadastro'])
    })
   
    console.log(this.dadosCartao)
    alert("opa")
  }

}
