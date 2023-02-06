import { CepServiceService } from './../../cep-service.service';
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
}
constructor(
  private cepService: CepServiceService,
  private service: CadastroService,
  private router: Router,
  private route: ActivatedRoute
){

}

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('nome')
  this.service.buscarCadastro(parseInt(id!)).subscribe((cadastro) => {
    this.cadastro = cadastro
  })
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

editarDados(){
  this.service.editar(this.cadastro).subscribe(()=>{
    this.router.navigate(['/cadastro'])
  })
}

}
