using BarberShop.Models;

namespace BarberShop.Services
{
    public interface IAgendamentoService
    {
        Task<Agendamento> CreateAgendamento(Agendamento agendamento);
        Task<List<Agendamento>> GetAgendamentos();
        Task DeletarAgendamento(Agendamento agendamento);
        Task EditarAgendamento(Agendamento agendamento);
        Task<Agendamento> GetAgendamentoPorId(Guid id);
    }
}
