using BarberShop.Data;
using BarberShop.Models;
using Microsoft.EntityFrameworkCore;

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

        public async Task<List<Agendamento>> GetAgendamentos()
        {
            return await _context.Agendamentos.ToListAsync();
        }

        public async Task EditarAgendamento(Agendamento agendamento)
        {
            _context.Agendamentos.Update(agendamento);
            await _context.SaveChangesAsync();
        }

        public async Task DeletarAgendamento(Agendamento agendamento)
        {
            _context.Agendamentos.Remove(agendamento);
            await _context.SaveChangesAsync();
        }

        public async Task<Agendamento> GetAgendamentoPorId(Guid id)
        {
            return await _context.Agendamentos.FindAsync(id);
        }
    }
}
