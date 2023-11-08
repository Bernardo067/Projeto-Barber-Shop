using BarberShop.Data;
using BarberShop.Models;
using BarberShop.Services;
using BarberShop.Util;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BarberShop.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IConfiguration _configuration;
        private readonly ITokenService _tokenService;
        private readonly ApplicationDbContext _context;

        public UserController(IUserService userService, IConfiguration configuration, ITokenService tokenService, ApplicationDbContext context)
        {
            _userService = userService;
            _configuration = configuration;
            _tokenService = tokenService;
            _context = context;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
        {
            var user = await _userService.Authenticate(loginRequest.Email, loginRequest.Password);

            if (user == null)
                return BadRequest("Credenciais inválidas.");

            var token = _tokenService.GenerateJwtToken(user);
            return Ok(new { Token = token, UserId = user.Id });
        }        

        [Authorize]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var user = await _userService.GetById(id);
            if (user == null)
                return NotFound();

            return Ok(user);
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _userService.GetAll();
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] User user)
        {
            try
            {
                var usuarioExistente = await _userService.GetByEmail(user.Email);
                if (usuarioExistente != null)
                {
                    return Conflict("Email já cadastrado");
                }

                if (!ValidaSenha.ValidacaoSenha(user.Password))
                {
                    return BadRequest("Senha não possui os requisitos necessários");
                }

                var createdUser = await _userService.Create(user, user.Password);
                return CreatedAtAction(nameof(GetById), new { id = createdUser.Id }, createdUser);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] User user)
        {
            try
            {
                await _userService.Update(user, user.Password);
                return Ok("Usuário atualizado com sucesso.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _userService.Delete(id);
                return Ok("Usuário excluído com sucesso.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [AllowAnonymous]
        [HttpPost("updatepassword")]
        public async Task<IActionResult> UpdatePassword([FromBody] UpdatePasswordRequest request)
        {
            try
            {
                var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == request.Email);
                await _userService.UpdatePassword(request);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
