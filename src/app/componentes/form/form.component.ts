
import { Cadastro } from './../cadastro/cadastro';
import { CadastroService } from './../cadastro.service';
import { CepServiceService } from './../../cep-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
      cep: any;
      logradouro: any;
      localidade: any;
      bairro: any;
      uf: any;
      ddd: any;

      cadastro: Cadastro = {
        id: 0,
        nome: '',
        email: '',
        tel: '',
        cep: '',
        endereco: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
        funcao: '',
        logradouro: '',
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
          this.cepService.getCEP(this.cep).subscribe((data) => {
            this.cep = data.cep;
            this.logradouro = data.logradouro;
            this.localidade = data.localidade;
            this.bairro = data.bairro;
            this.uf = data.uf;

            console.log(this.cepService)
            console.log(this.bairro);
          });

      }

      blur(event: any) {
        this.consultaCep();

        console.log(this.consultaCep);
      }

      cadastroDados(){
        this.service.criar(this.cadastro).subscribe(() => {
          this.router.navigate(['/listarCadastro'])
        })
        // alert("to funcionando")
        console.log(this.cadastro)
      }

}

