import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { EmpresaService } from './../empresa.service';
import { MessageService } from 'primeng/api';
import { Empresa } from './../../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styleUrls: ['./empresa-cadastro.component.css']
})
export class EmpresaCadastroComponent implements OnInit {

  empresa = new Empresa();

  constructor(
    private service: EmpresaService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizarEmpresa(form);
    } else {
      this.adicionarEmpresa(form);
    }
  }

  atualizarEmpresa(form: NgForm) {
    this.service.atualizar(this.empresa)
    .then(empresa => {
      this.empresa = empresa;
      this.messageService.add({severity: 'success', detail: 'Empresa atualizada com sucesso!'});
      this.atualizarTituloEdicao();
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  adicionarEmpresa(form: NgForm) {
    this.service.adicionar(this.empresa)
    .then(empresaAdicionada => {
      this.messageService.add({severity: 'success', detail: 'Empresa adicionada com sucesso!'});
      this.router.navigate(['/empresas', empresaAdicionada.id]);

    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    const id = this.route.snapshot.params['id'];

    this.title.setTitle('Nova empresa');

    if (id) {
      this.carregarEmpresa(id);
    }
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição da empresa ${this.empresa.nomeFantasia}`);
  }

  get editando() {
    return Boolean(this.empresa.id);
  }

  carregarEmpresa(id: number) {
    this.service.buscarPorId(id)
    .then(empresa => {
      this.empresa = empresa;
      this.atualizarTituloEdicao();
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  nova(form: NgForm) {
    form.reset();
    setTimeout(function() {
      this.empresa = new Empresa();
    }.bind(this), 1);
    this.router.navigate(['/empresas/nova']);
  }
}
