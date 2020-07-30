export class Empresa {
  id: number;
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  crt: string;
  inscricaoEstadual: string;
  endereco = new Endereco();

}

export class Endereco {
  logradouro: string;
  numero: string;
  complemento: string;
  cep: string;
  nomeCidade: string;
  codigoIbegeCidade: string;
  siglaEstado: string;
  codigoIbegeEstado: string;
  pais: string;
  codigoIbegePais: string;

}
