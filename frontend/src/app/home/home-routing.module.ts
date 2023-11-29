// components-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { RedefinirSenhaComponent } from './components/redefinir-senha/redefinir-senha.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { TelaDoBarbeiroComponent } from './components/tela-do-barbeiro/tela-do-barbeiro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' }, // Corrigido aqui
  { path: 'login', component: LoginComponent }, // Corrigido aqui
  { path: 'cadastro', component: CadastroComponent },
  { path: 'redefinirSenha', component: RedefinirSenhaComponent },
  { path: 'Agenda', component:  AgendaComponent },
  { path: 'tela-do-barbeiro', component: TelaDoBarbeiroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

