import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { EmpresaService } from './../empresa.service';
import { MessageService } from 'primeng/api';
import { Empresa } from './../../core/model';

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
    private errorHandler: ErrorHandlerService
  ) { }

  salvar(form: NgForm) {
    this.service.adicionar(this.empresa)
    .then(() => {
      this.messageService.add({severity: 'success', detail: 'Empresa adicionada com sucesso!'});
      form.reset();
      this.empresa = new Empresa();
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  ngOnInit(): void {
  }
}
