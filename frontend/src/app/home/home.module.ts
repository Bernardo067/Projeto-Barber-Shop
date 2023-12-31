import { CommonModule, registerLocaleData } from "@angular/common";
import { CadastroComponent } from "./components/cadastro/cadastro.component";
import { LoginComponent } from "./components/login/login.component";
import { LOCALE_ID, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from "../shared/app-material/app-material.module";
import { SharedModule } from "../shared/shared.module";
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { ComponentsRoutingModule } from "./home-routing.module";
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RedefinirSenhaComponent } from './components/redefinir-senha/redefinir-senha.component';
import { CadastroService } from "./service/cadastro.service";
import { HttpClientModule } from "@angular/common/http";
import { AgendaComponent } from './components/agenda/agenda.component';
import localePt from '@angular/common/locales/pt';
import { TelaDoBarbeiroComponent } from "./components/tela-do-barbeiro/tela-do-barbeiro.component";

registerLocaleData(localePt);

@NgModule({  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  declarations: [
    LoginComponent,
    CadastroComponent,
    RedefinirSenhaComponent,
    AgendaComponent,
    TelaDoBarbeiroComponent,

    
    
  ],
  imports: [  
    MatSelectModule ,
    MatIconModule,
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
    TooltipModule.forRoot(),
    HttpClientModule
  ],
  
})
export class HomeModule { }
