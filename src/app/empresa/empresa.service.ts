import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  consultar(): Promise<any> {
    return this.http.get('http://localhost:8080/empresas')
      .toPromise();
  }
}
