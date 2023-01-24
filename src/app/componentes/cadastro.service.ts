import { Cadastro } from './cadastro/cadastro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly API = 'http://localhost:3000/cadastro'

  constructor(private http: HttpClient) { }

  listar(): Observable<Cadastro> {
    return this.http.get<Cadastro>(this.API)
  }

}
