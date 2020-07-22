import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaPesquisaComponent } from './empresa-pesquisa/empresa-pesquisa.component';



@NgModule({
  declarations: [EmpresaPesquisaComponent],
  imports: [
    CommonModule
  ],
  exports: [EmpresaPesquisaComponent]
})
export class EmpresaModule { }
