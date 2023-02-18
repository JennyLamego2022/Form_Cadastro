
import { Cadastro } from './../cadastro/cadastro';
import { CadastroService } from './../cadastro.service';
import { Cep, CepServiceService } from './../../cep-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css','./mq.component.css']
})
export class FormComponent implements OnInit{

  cep: Cep = {
    cep: '',
    logradouro: '',
    localidade: '',
    bairro: '',
    uf:''

  }



      cadastro: Cadastro = {
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


      constructor(
        private cepService: CepServiceService,
        private service: CadastroService,
        private router: Router
        ){}

      ngOnInit(): void {


      }


      consultaCep() {
          this.cepService.getCEP(this.cadastro.endereco.cep).subscribe((data) => {
            this.cadastro.endereco.cep = data.cep;
            this.cadastro.endereco.logradouro = data.logradouro;
            this.cadastro.endereco.localidade = data.localidade;
            this.cadastro.endereco.bairro = data.bairro;
            this.cadastro.endereco.uf = data.uf;

            console.log('endereco:', this.cadastro.endereco)
            console.log(this.cadastro.endereco.bairro);
          });

      }

      blur(event: any) {
        this.consultaCep();

        console.log(this.consultaCep);
      }

      cadastroDados(){
        this.service.criar(this.cadastro).subscribe(() => {
          this.router.navigate(['/card'])
        })
        // alert("to funcionando")
        console.log(this.cadastro)
        console.log(this.cadastro.endereco.bairro)
      }


  // const checkbox = document.querySelector('.btn-toggle');

  checkbox() {
  document.body.classList.toggle('t-light');
}

}

