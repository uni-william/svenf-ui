import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaPesquisaComponent } from './empresa-pesquisa/empresa-pesquisa.component';
import { TableModule } from 'primeng/table';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';
import { FormsModule } from '@angular/forms';
import { EmpresaRoutingModule } from './empresa-routing.module';




@NgModule({
  declarations: [EmpresaPesquisaComponent, EmpresaCadastroComponent],
  imports: [
    CommonModule,
    TableModule,
    InputMaskModule,
    InputTextModule,
    ButtonModule,
    PanelModule,
    TooltipModule,
    FormsModule,
    SharedModule,
    EmpresaRoutingModule
  ],
  exports: [EmpresaPesquisaComponent, EmpresaCadastroComponent]
})
export class EmpresaModule { }
