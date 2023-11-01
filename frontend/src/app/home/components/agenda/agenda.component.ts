import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
  selectedMonth: number = new Date().getMonth() + 1; // Mês atual
  selectedYear: number = new Date().getFullYear(); // Ano atual
  selectedWeek: number = 0; // Semana atual (0 representa a semana atual)

  // Nomes dos meses
  months: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  // Você pode ajustar o intervalo de anos
  years: number[] = [2023, 2024, 2025, 2026, 2027];

  // Propriedade weekDays declarada aqui
  weekDays: { name: string; date: Date }[] = [];
  weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  // Defina a propriedade appointments como um objeto vazio
  appointments: { [key: string]: string } = {}; // Agora armazenamos nomes de agendamento diretamente por chave
  appointmentName: string | null = null;

  constructor(private router: Router) {
    this.generateWeekDays();
  }

  voltarPagina() {
    // Implemente o comportamento desejado para o botão "Voltar".
    // Por exemplo, navegar de volta para a página anterior:
    this.router.navigate(['/PgUsuario']); // Substitua '/pagina-anterior' pelo caminho da sua página anterior.
  }

  // Função para formatar a data em português
  getFormattedDate(day: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long'
    };

    const formattedDate = day.toLocaleDateString('pt', options);

    return formattedDate;
  }

  times = this.generateTimes();

  agendar(dayIndex: number, timeIndex: number) {
    // Calcula a data baseada no índice do dia
    const date = new Date(this.selectedYear, this.selectedMonth - 1, 1);
    date.setDate(date.getDate() + (dayIndex + this.selectedWeek * 7) - 1); // Subtrai 1 para compensar o índice baseado em 1

    const formattedDate = this.getFormattedDate(date);
    const time = this.times[timeIndex];
    const dateTimeKey = `${formattedDate} ${time}`;

    // Verifique se o nome do agendamento não está vazio
    if (this.appointmentName) {
      // Usamos a mesma chave (dateTimeKey) para armazenar o nome do agendamento
      this.appointments[dateTimeKey] = this.appointmentName;
      console.log(`Compromisso agendado para ${dateTimeKey}`);
    } else {
      console.log('O nome do agendamento não pode estar vazio.');
    }

    // Limpe o nome do agendamento após agendar
    this.appointmentName = null;
  }

  excluir(date: Date, timeIndex: number, dayIndex: number) {
    const formattedDate = this.getFormattedDate(date);
    const time = this.times[timeIndex];
    const dateTimeKey = `${formattedDate} ${time}`;

    // Adicione a lógica de exclusão aqui (por exemplo, enviar para o servidor).
    delete this.appointments[dateTimeKey]; // Remove o compromisso
    console.log(`Compromisso excluído em ${dateTimeKey}`);
  }

  // Função para navegar para a próxima ou anterior semana
  navegarSemana(weekOffset: number) {
    // Atualize a semana baseado no deslocamento
    this.selectedWeek += weekOffset;

    // Atualize o mês quando necessário
    while (this.selectedWeek < 0) {
      this.selectedMonth -= 1;
      if (this.selectedMonth < 1) {
        this.selectedYear -= 1;
        this.selectedMonth = 12;
      }
      this.selectedWeek += this.calculateWeeksInMonth();
    }
    while (this.selectedWeek >= this.calculateWeeksInMonth()) {
      this.selectedMonth += 1;
      if (this.selectedMonth > 12) {
        this.selectedYear += 1;
        this.selectedMonth = 1;
      }
      this.selectedWeek -= this.calculateWeeksInMonth();
    }

    // Recarregue os horários
    this.times = this.generateTimes();

    // Atualize os dias da semana
    this.generateWeekDays();
  }

  private calculateWeeksInMonth(): number {
    const firstDayOfMonth = new Date(this.selectedYear, this.selectedMonth - 1, 1);
    const lastDayOfMonth = new Date(this.selectedYear, this.selectedMonth, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const daysFromLastWeek = 7 - lastDayOfMonth.getDay();
    const totalDaysInCalendar = daysInMonth + daysFromLastWeek;
    return Math.ceil(totalDaysInCalendar / 7);
  }

  private generateTimes(): string[] {
    // Função para gerar os horários das 8:00 às 22:00 em intervalos de 30 minutos
    const times = [];
    for (let hour = 8; hour <= 19; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        times.push(time);
      }
    }
    return times;
  }

  // Função para gerar os dias da semana com base no mês e semana selecionados
  private generateWeekDays() {
    this.weekDays = [];

    // Crie uma data para o primeiro dia da semana
    const firstDayOfWeek = new Date(this.selectedYear, this.selectedMonth - 1, 1 + (this.selectedWeek * 7));

    // Defina o dia da semana para o primeiro dia do mês (0 a 6, onde 0 é domingo)
    const dayOfWeek = firstDayOfWeek.getDay();

    // Subtrai o dia da semana do primeiro dia do mês para obter o primeiro dia da semana do calendário
    const firstCalendarDay = new Date(firstDayOfWeek);
    firstCalendarDay.setDate(firstDayOfWeek.getDate() - dayOfWeek);

    // Preencha os dias da semana a partir do firstCalendarDay
    for (let i = 0; i < 7; i++) {
      const date = new Date(firstCalendarDay);
      date.setDate(firstCalendarDay.getDate() + i);
      const dayName = this.weekdays[i];
      this.weekDays.push({ name: dayName, date: date });
    }
  }

  // Esta função é chamada quando há uma mudança no mês selecionado no dropdown
  onMonthChange() {
    // Quando o mês é alterado, atualize os dias da semana correspondentes
    this.selectedWeek = 0; // Reset da semana para a atual
    this.generateWeekDays();
  }
}