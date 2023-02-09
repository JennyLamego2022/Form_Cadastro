import { Router, ActivatedRoute } from '@angular/router';
import { Cadastro } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-excluir-cadastro',
  templateUrl: './excluir-cadastro.component.html',
  styleUrls: ['./excluir-cadastro.component.css']
})
export class ExcluirCadastroComponent {

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
    private service: CadastroService,
    private router: Router,
    private route: ActivatedRoute
    ){}

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarCadastro(parseInt(id!)).subscribe((cadastro) => {
        this.cadastro = cadastro
      })
    }

    excluirCadastro() {
      if(this.cadastro.id){
        this.service.excluir(this.cadastro.id).subscribe(() => {
          this.router.navigate(['/form'])
          console.log(this.cadastro.id)
        })
      }
    }

    cancelarCadastro(){
      this.router.navigate(['/form'])
    }

}
