import { EmpresaService } from './../empresa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-pesquisa',
  templateUrl: './empresa-pesquisa.component.html',
  styleUrls: ['./empresa-pesquisa.component.css']
})
export class EmpresaPesquisaComponent implements OnInit {

  empresas = [];

  constructor(private service: EmpresaService) { }

  ngOnInit(): void {
    this.service.consultar()
    .then(empresas => {
      this.empresas = empresas;
    });
  }

}
