import { Component, OnInit } from '@angular/core';
import { Client } from './../models/client';
import { Router } from '@angular/router';

import { TopBarComponent } from '../top-bar/top-bar.component'; 
import { ClientService } from '../services/client.service';
import { ClientKpi } from '../models/clientkpi';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  clients: Client[]= []
  clientKpi: ClientKpi;
  client: Client;
  constructor(private clientService: ClientService,
              private router: Router) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      data => {
        this.clients = data;
        console.log(this.clients);
      },
      err => console.log(err)
    )

    this.clientService.getClientKpi().subscribe(
      data => {
        this.clientKpi = data;
      }, 
      err => console.log(err)
    )
  }

  goDetail(clientSubmitted: Client) {
    this.client = clientSubmitted;
    this.router.navigate(['/list-client'])
  }

  ngOnDestroy() {
    this.clientService.client = this.client; 
 }
}
