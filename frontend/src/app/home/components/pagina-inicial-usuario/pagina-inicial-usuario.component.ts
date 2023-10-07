import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicial-usuario',
  templateUrl: './pagina-inicial-usuario.component.html',
  styleUrls: ['./pagina-inicial-usuario.component.scss']
})
export class PaginaInicialUsuarioComponent implements OnInit {
  // Simulação de dados de profissionais (você deve buscar esses dados de um serviço ou API)
  profissionais = [
    { id: 1, nome: 'Profissional 1', especialidade: 'Corte e Barba' },
    { id: 2, nome: 'Profissional 2', especialidade: 'Corte e Barba' },
    { id: 3, nome: 'Profissional 3', especialidade: 'Corte e Barba' }
    // Adicione mais profissionais conforme necessário
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irParaAgenda(profissionalId: number) {
    this.router.navigate(["/Agenda"]); // Corrigido para "/Agenda"
    // Implemente a navegação para a agenda do profissional com base no ID
    // Por exemplo, usando o roteamento do Angular
  }

  sair() {
    this.router.navigate(['/Login']);
  }
}

