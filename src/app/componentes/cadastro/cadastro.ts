export interface Cadastro {
  id?: number
  nome: string
  email: string
  tel: string
  cep: string
  endereco: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: String
  nomeCard: string
  bandeira: string
  funcao: string
  cvc: string
  validade: string
  logradouro: string

};

export interface dadosCartao {

    numero: string
    funcao:string
    bandeira: string
    cvc: string
    nomeCard: string
    validade: string
};
// export interface Cep {

//   cep: number
//   logradouro: string
//   localidde: string
//   bairro: string
// };

