import { Cep, CepServiceService } from './../../cep-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from './../cadastro.service';
import { Cadastro } from './../cadastro/cadastro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-cadastro',
  templateUrl: './editar-cadastro.component.html',
  styleUrls: ['./editar-cadastro.component.css']
})
export class EditarCadastroComponent implements OnInit{
  [x: string]: any;

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
  private router: Router,
  private route: ActivatedRoute
){

}

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id')
  this.service.buscarCadastro(parseInt(id!)).subscribe((cadastro) => {
    this.cadastro = cadastro
  })
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

editarCadastro(){
  this.service.editar(this.cadastro).subscribe(()=>{
    this.router.navigate(['/cadastro'])
  })
}

cancelar(){
  this.router.navigate(['/cadastro'])
}
}
