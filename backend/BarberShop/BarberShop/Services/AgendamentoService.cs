using BarberShop.Data;
using BarberShop.Models;

namespace BarberShop.Services
{
    public class AgendamentoService : IAgendamentoService
    {
        private readonly ApplicationDbContext _context;

        public AgendamentoService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Agendamento> CreateAgendamento(Agendamento agendamento)
        {
            if (string.IsNullOrEmpty(agendamento.Nome))
            {
                throw new ArgumentException("Nome é obrigatório!");
            }

            _context.Agendamentos.Add(agendamento);
            await _context.SaveChangesAsync();
            return agendamento;
        }
    }
}
