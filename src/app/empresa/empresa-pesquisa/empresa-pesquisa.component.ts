import { EmpresaService, EmpresaFiltro } from './../empresa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-empresa-pesquisa',
  templateUrl: './empresa-pesquisa.component.html',
  styleUrls: ['./empresa-pesquisa.component.css']
})
export class EmpresaPesquisaComponent implements OnInit {

  empresas = [];

  cnpj: string;
  razaoSocial: string;

  @ViewChild('tabela', {static: true}) grid: Table;

  constructor(private service: EmpresaService,
              private messageService: MessageService,
              private confirmation: ConfirmationService) { }

  ngOnInit(): void {
  }

  consultar() {
    const filtro: EmpresaFiltro = {
      cnpj: this.cnpj,
      razaoSocial: this.razaoSocial
    };

    this.service.consultar(filtro)
    .then(empresas => {
      this.empresas = empresas;
    });
  }

  confirmarExcluisao(empresa: any) {

    this.confirmation.confirm({
      message: 'Confirma a exclusão deste registro?',
      accept: () => {
        this.excluir(empresa);
      }
    });

  };

  excluir(empresa: any) {
    this.service.excluir(empresa.id)
    .then(() => {
      this.consultar();
      this.grid.reset();
      this.messageService.add({severity: 'success', detail: 'Empresa excluída com sucesso!'});
    });
  }

}
