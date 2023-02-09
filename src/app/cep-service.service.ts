import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



 export interface Cep {
    cep: string;
    logradouro: string;
    localidade: string;
    bairro: string;
    uf: string;

}


@Injectable({
  providedIn: 'root',


})
export class CepServiceService {



  constructor(private httpCliente: HttpClient) { }

  getCEP( cep: Cep): Observable<Cep>{
    return this.httpCliente.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`);

  }

  // buscar(cep:string){
  //   return this.httpCliente.get(`https://viacep.com.br/ws/${cep}/json`)
  // }
}
