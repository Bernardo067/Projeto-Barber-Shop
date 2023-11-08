using BarberShop.Data;
using BarberShop.Models;
using BarberShop.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace BarberShop.Controllers
{
    [ApiController]
    [Route("api/agendamento")]
    public class AgendamentoController : ControllerBase
    {
        private readonly IAgendamentoService _agendamentoService;
        private readonly ApplicationDbContext _context;

        public AgendamentoController(IAgendamentoService agendamentoService, ApplicationDbContext context)
        {
            _context = context;
            _agendamentoService = agendamentoService;
        }

        [Route("criar")] // Rota completa: api/agendamento/criar
        [HttpPost]
        public async Task<IActionResult> CriarAgendamento([FromBody] Agendamento agendamento)
        {
            if (agendamento == null)
            {
                return BadRequest("O agendamento não pode ser nulo");
            }

            try
            {
                // Chame o método CreateAgendamento do serviço para criar o agendamento no banco de dados
                var novoAgendamento = await _agendamentoService.CreateAgendamento(agendamento);

                return CreatedAtAction("GetAgendamento", new { id = novoAgendamento.Id }, novoAgendamento);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Ocorreu um erro ao criar o agendamento: {ex.Message}");
            }
        }
    }
}
