import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { RedefinirSenhaComponent } from './components/redefinir-senha/redefinir-senha.component';
import { AgendaComponent } from './components/agenda/agenda.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Login' },
  { path: 'Login', component: LoginComponent },
  { path: 'Cadastro', component: CadastroComponent },
  { path: 'redefinirSenha', component: RedefinirSenhaComponent },
  { path: 'Agenda', component:  AgendaComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
