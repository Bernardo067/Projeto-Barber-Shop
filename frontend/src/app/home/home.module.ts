import { CommonModule } from "@angular/common";
import { CadastroComponent } from "./components/cadastro/cadastro.component";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from "../shared/app-material/app-material.module";
import { SharedModule } from "../shared/shared.module";
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { ComponentsRoutingModule } from "./home-routing.module";
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RedefinirSenhaComponent } from './components/redefinir-senha/redefinir-senha.component';

@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    RedefinirSenhaComponent
  ],
  imports: [  
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule, 
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSortModule,
    MatFormFieldModule,
    TooltipModule.forRoot()
  ]
})
export class HomeModule { }
