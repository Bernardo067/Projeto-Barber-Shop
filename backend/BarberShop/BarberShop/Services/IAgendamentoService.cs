using BarberShop.Models;

namespace BarberShop.Services
{
    public interface IAgendamentoService
    {
        Task<Agendamento> CreateAgendamento(Agendamento agendamento);
    }
}
