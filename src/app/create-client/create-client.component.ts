import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  clientForm: FormGroup;

  constructor(private clientService: ClientService,
              private formBuilder: FormBuilder) { 
    this.clientForm = this.formBuilder.group({
      name: [''],
      lastName: [''],
      age: [''],
      dateBorn: []
    });
  }

  ngOnInit(): void {
  }

  createClient() {
    const data = {
      name: this.clientForm.get('name').value,
      lastName: this.clientForm.get('lastName').value,
      age: this.clientForm.get('age').value,
      dateBorn: this.clientForm.get('dateBorn').value
    }
    console.log(data);
    this.clientService.createUser(data).subscribe(
      res => {
        alert('Cliente creado correctamente');
        this.cleanFields();
      }, 
      err => {
        console.log(err);
      }
    )
  }

  cleanFields(){
    this.clientForm.get('name').setValue(""),
    this.clientForm.get('lastName').setValue(""),
    this.clientForm.get('age').setValue(""),
    this.clientForm.get('dateBorn').setValue("")
  }

}
