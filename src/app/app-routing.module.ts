import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';
import { FormClientComponent } from './form-client/form-client.component';
import { HomeComponent } from './home/home.component';
import { ListClientComponent } from './list-client/list-client.component';


const routes: Routes = [
  {
    path: 'create-client',
    component: CreateClientComponent,
    data: {
      title: 'Crear cliente'
    }
  },
  {
    path: 'create-output-client',
    component: FormClientComponent,
    data: {
      title: 'Listar clientes'
    }
  },
  {
    path: 'list-client',
    component: ListClientComponent,
    data: {
      title: 'Listar clientes'
    }
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Pagina de inicio'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
