export interface Cadastro {
  id?: number
  nome: string
  email: string
  tel: string
  endereco: {
    localidade:string
    cep: string
    complemento: string
    numero: string
    bairro: string
    cidade: string
    uf: String
    logradouro: string
  }
  nomeCard: string
  bandeira: string
  funcao: string
  cvc: string
  validade: string

};

export interface dadosCartao {

    numero: string
    funcao:string
    bandeira: string
    cvc: string
    nomeCard: string
    validade: string
}

