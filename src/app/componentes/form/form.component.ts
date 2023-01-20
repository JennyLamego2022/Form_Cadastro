import { CepServiceService } from './../../cep-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
      cep: any;
      logradouro: any;
      localidade: any;
      bairro: any;
      uf: any;
      ddd: any;


      constructor(private cepService: CepServiceService){}

      ngOnInit(): void {

        throw new Error('Method not implemented.');
      }


      consultaCep() {
          this.cepService.getCEP(this.cep).subscribe((data) => {
            this.cep = data.cep;
            this.logradouro = data.logradouro;
            this.localidade = data.localidade;
            this.bairro = data.bairro;
            this.uf = data.uf;


            console.log(this.bairro);
          });

      }

      blur(event: any) {
        this.consultaCep();

        console.log(this.consultaCep);
      }

}
