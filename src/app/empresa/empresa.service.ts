import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


export interface EmpresaFiltro {
  cnpj: string;
  razaoSocial: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  empresasUrl = 'http://localhost:8080/empresas';

  consultar(filtro: EmpresaFiltro): Promise<any> {

    let params = new HttpParams();
    if (filtro.cnpj) {
      params = params.set('cnpj', filtro.cnpj);
    }

    if (filtro.razaoSocial) {
      params = params.set('razaoSocial', filtro.razaoSocial);
    }

    return this.http.get(`${this.empresasUrl}`, { params })
      .toPromise()
      .then(response => response['content']);
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.empresasUrl}/${id}`)
    .toPromise()
    .then(() => null);
  }
}
