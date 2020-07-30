import { ErrorHandlerService } from './../../core/error-handler.service';
import { EmpresaService, EmpresaFiltro } from './../empresa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService, LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-empresa-pesquisa',
  templateUrl: './empresa-pesquisa.component.html',
  styleUrls: ['./empresa-pesquisa.component.css']
})
export class EmpresaPesquisaComponent implements OnInit {

  empresas = [];
  filtro = new EmpresaFiltro();
  totalRegistros = 0;

  @ViewChild('tabela', {static: true}) grid: Table;

  constructor(private service: EmpresaService,
              private messageService: MessageService,
              private confirmation: ConfirmationService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.service.consultar(this.filtro)
    .then(resultado => {
      this.empresas = resultado.empresas;
      this.totalRegistros = resultado.total;
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExcluisao(empresa: any) {

    this.confirmation.confirm({
      message: 'Confirma a exclusão deste registro?',
      accept: () => {
        this.excluir(empresa);
      }
    });

  }

  excluir(empresa: any) {
    this.service.excluir(empresa.id)
    .then(() => {
      this.pesquisar();
      this.grid.reset();
      this.messageService.add({severity: 'success', detail: 'Empresa excluída com sucesso!'});
    })
    .catch(erro => this.errorHandler.handle(erro));
  }


  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
