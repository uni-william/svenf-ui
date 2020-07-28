import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-pesquisa',
  templateUrl: './empresa-pesquisa.component.html',
  styleUrls: ['./empresa-pesquisa.component.css']
})
export class EmpresaPesquisaComponent implements OnInit {

  empresas = [
    { cnpj: '04408929000105',
      razaoSocial: 'G. N. Ltda',
      nomeFantasia: 'Iranduba Pescado',
      inscricaoEstadual: '123456789'
    },
    { cnpj: '04408929000105',
      razaoSocial: 'G. N. Ltda',
      nomeFantasia: 'Iranduba Pescado',
      inscricaoEstadual: '123456789'
    },
    { cnpj: '04408929000105',
      razaoSocial: 'G. N. Ltda',
      nomeFantasia: 'Iranduba Pescado',
      inscricaoEstadual: '123456789'
    },
    { cnpj: '04408929000105',
      razaoSocial: 'G. N. Ltda',
      nomeFantasia: 'Iranduba Pescado',
      inscricaoEstadual: '123456789'
    },
    { cnpj: '04408929000105',
      razaoSocial: 'G. N. Ltda',
      nomeFantasia: 'Iranduba Pescado',
      inscricaoEstadual: '123456789'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
