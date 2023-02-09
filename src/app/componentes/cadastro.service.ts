import { Cadastro, dadosCartao } from './cadastro/cadastro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  // getCep() {
  //   throw new Error('Method not implemented.');
  // }

  private readonly API = 'http://localhost:3000/cadastro'
  private readonly API2 = 'http://localhost:3000/dadosCartao'

  constructor(private http: HttpClient) { }

  // listar(): Observable<Cadastro []> {
  //   return this.http.get<Cadastro[]>(this.API)
  // }

  listar() : Observable<Cadastro> {
    return this.http.get<Cadastro>(this.API)
  }
  listarPg() : Observable<dadosCartao> {
    return this.http.get<dadosCartao>(this.API2)
  }

  editar(cadastro: Cadastro): Observable<Cadastro>{
    return this.http.put<Cadastro>(this.API, cadastro)
  }

  criar(cadastro: Cadastro): Observable<Cadastro>{
    return this.http.post<Cadastro>(this.API, cadastro)
  }

  criarPG(dadosCartao: dadosCartao): Observable<dadosCartao>{
    return this.http.post<dadosCartao>(this.API2, dadosCartao)
  }

  excluir(id:number): Observable<Cadastro>{
    const url = `${this.API}/${id}`
    return this.http.delete<Cadastro>(url)
  }

  buscarCadastro(id:number): Observable<Cadastro>{
    const url = `${this.API}/${id}`
    return this.http.get<Cadastro>(url)
  }

  buscarCadastroCard(nome:string): Observable<dadosCartao>{

    return this.http.get<dadosCartao>(this.API2)
  }



}
