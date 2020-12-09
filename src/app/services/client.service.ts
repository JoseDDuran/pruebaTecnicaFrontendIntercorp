import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient }  from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client, ObservableClient } from '../models/client';
import { map } from 'rxjs/operators';
import { ClientKpi } from '../models/clientkpi';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public client: Client;
  private baseUrl = environment.basePath;
  constructor(private http:HttpClient) { }

  createUser(payload: Object) {
    return this.http
      .post<any>(`${this.baseUrl}/creacliente`, payload);
  }

  getClients(){
    return this.http
      .get<Client[]>(`${this.baseUrl}/listclientes`)
  }

  getClientKpi(){
    return this.http
      .get<ClientKpi>(`${this.baseUrl}/kpideclientes`)
  }
}
