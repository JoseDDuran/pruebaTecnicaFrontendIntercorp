import { Component, OnInit } from '@angular/core';
import { Client } from './../models/client';
import { Observable } from 'rxjs';


import { TopBarComponent } from '../top-bar/top-bar.component'; 
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  client: Client;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.client = this.clientService.client;
    console.log(this.client);
  }

}
