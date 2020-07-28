import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  empresasUrl = 'http://localhost:8080/empresas';

  consultar(): Promise<any> {
    return this.http.get(this.empresasUrl)
      .toPromise();
  }
}
