import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  mostrarMensagem: boolean = false; // Variável para controlar a exibição da mensagem
  tipoCadastro: string = 'cliente'; // Valor padrão é 'cliente'

  constructor(private router: Router) {}

  nome: string = '';
  email: string = '';
  cpfCnpj: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  realizarCadastro() {
    // Lógica para realizar o cadastro
    if (this.validarCampos()) {
      // Se os campos estiverem válidos, você pode prosseguir com o cadastro

      // Aqui, você pode enviar os dados para o servidor ou realizar qualquer outra ação necessária
      console.log('Realizar Cadastro: Nome:', this.nome, 'E-mail:', this.email, 'Senha:', this.senha);

      // Redireciona para a página apropriada com base no tipo de cadastro
      if (this.tipoCadastro === 'cliente') {
        this.router.navigate(['/PáginaCliente']); // Substitua 'PáginaCliente' pelo caminho correto
      } else if (this.tipoCadastro === 'barbeiro') {
        this.router.navigate(['/PáginaBarbeiro']); // Substitua 'PáginaBarbeiro' pelo caminho correto
      }
    } else {
      // Campos inválidos, exibe a mensagem de aviso
      this.mostrarMensagem = true;
    }
  }

  validarCampos(): boolean {
    // Aqui você pode implementar lógica de validação personalizada para os campos
    // Retorna true se os campos estiverem válidos, caso contrário, retorna false

    // Exemplo de validação simples: todos os campos são obrigatórios
    if (!this.nome || !this.email || !this.cpfCnpj || !this.senha || !this.confirmarSenha) {
      return false;
    }

    // Verifique se a senha e a confirmação de senha coincidem
    if (this.senha !== this.confirmarSenha) {
      return false;
    }

    // Outras verificações personalizadas podem ser adicionadas aqui

    return true;
  }

  cancelarCadastro() {
    // Redireciona o usuário para a página de login (ajuste o caminho conforme necessário)
    this.router.navigate(['/Login']);
  }

  ngOnInit() {
    // Inicializações ou lógica de inicialização podem ser adicionadas aqui, se necessário
  }
}
