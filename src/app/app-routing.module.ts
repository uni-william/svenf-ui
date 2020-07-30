import { NgModule } from '@angular/core';
import { EmpresaCadastroComponent } from './empresa/empresa-cadastro/empresa-cadastro.component';
import { EmpresaPesquisaComponent } from './empresa/empresa-pesquisa/empresa-pesquisa.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'empresas', component: EmpresaPesquisaComponent },
  { path: 'empresas/nova', component: EmpresaCadastroComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
