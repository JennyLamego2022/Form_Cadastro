import { CepServiceService } from './cep-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario_cadastro';

    // constructor(private cepService: CepServiceService){}

    // consultaCep(valor, form){
    //   this.cepService.buscar(valor).subscribe((dados) => this.populaForm(dados, form));
    // }

    // populaForm(dados, form){
    //   form.setValue({
    //     cep: dados.cep,
    //     logradouro: dados.logradouro,
    //     bairro: dados.bairro,
    //     cidade: dados.cidade,
    //     uf: dados.uf
    //   })
    // }


}
