import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


export class EmpresaFiltro {
  cnpj: string;
  razaoSocial: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  empresasUrl = 'http://localhost:8080/empresas';

  consultar(filtro: EmpresaFiltro): Promise<any> {

    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());


    if (filtro.cnpj) {
      params = params.set('cnpj', filtro.cnpj);
    }

    if (filtro.razaoSocial) {
      params = params.set('razaoSocial', filtro.razaoSocial);
    }

    return this.http.get(`${this.empresasUrl}`, { params })
      .toPromise()
      .then(response => {
        const empresas = response['content']
        const resultado = {
          empresas,
          total: response['totalElements']
        }
        return resultado;
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.empresasUrl}/${id}`)
    .toPromise()
    .then(() => null);
  }
}
