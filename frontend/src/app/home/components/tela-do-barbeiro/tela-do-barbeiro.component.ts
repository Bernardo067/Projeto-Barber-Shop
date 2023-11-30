import { Component } from '@angular/core';
import { TelaDoBarbeiro } from '../../model/tela-do-barbeiro';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tela-do-barbeiro',
  templateUrl: './tela-do-barbeiro.component.html',
  styleUrls: ['./tela-do-barbeiro.component.scss']
})
export class TelaDoBarbeiroComponent {

 
  listaAgendamentos = [
    { id: 1, nome: 'Agendamento 1' },
    { id: 2, nome: 'Agendamento 2' },
    // ... adicione mais objetos conforme necessário
  ];

  // Use MatTableDataSource para fornecer dados para a tabela
  dataSource = new MatTableDataSource(this.listaAgendamentos);

  editarAgendamento(agendamentoId: number): void {
    // Lógica para editar o agendamento com o ID fornecido
    console.log(`Editar Agendamento ID ${agendamentoId}`);
  }

  deletarAgendamento(agendamentoId: number): void {
    // Lógica para deletar o agendamento com o ID fornecido
    console.log(`Deletar Agendamento ID ${agendamentoId}`);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}

