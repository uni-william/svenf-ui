import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { EmpresaService } from './../empresa/empresa.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from './error-handler.service';
import { EmpresaPesquisaComponent } from './../empresa/empresa-pesquisa/empresa-pesquisa.component';
import { EmpresaModule } from './../empresa/empresa.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaCadastroComponent } from '../empresa/empresa-cadastro/empresa-cadastro.component';
import { AppRoutingModule } from './../app-routing.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { Title } from '@angular/platform-browser';


@NgModule({
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    EmpresaModule,
    ToastModule,
    ConfirmDialogModule,
    AppRoutingModule
  ],
  exports: [ NavbarComponent,
             EmpresaCadastroComponent,
             EmpresaPesquisaComponent,
             ToastModule,
             ConfirmDialogModule
  ],
  providers: [
    EmpresaService, MessageService, ConfirmationService,
    ErrorHandlerService, Title
  ]
})
export class CoreModule { }
