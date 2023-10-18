using BarberShop.Data;
using BarberShop.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using static BarberShop.Util.ValidaSenha;

namespace BarberShop.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;

        public UserService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<User> Authenticate(string email, string password)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == email && u.Password == password);

            if (user == null)
                return null;

            return user;
        }

        public async Task<User> Create(User user, string password)
        {
            if (string.IsNullOrWhiteSpace(password))
                throw new ApplicationException("Senha é obrigatória.");

            user.Password = password;  // Store the plain text password

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<User> GetById(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<List<User>> GetAll()
        {
            return _context.Users
                           .Select(user => new User
                           {
                               Id = user.Id,
                               Nome = user.Nome,
                               SobreNome = user.SobreNome,
                               Email = user.Email,
                               Password = user.Password,
                               TipoUsuario = user.TipoUsuario
                           })
                           .ToList();
        }

        public async Task Update(User user, string password = null)
        {
            var existingUser = await _context.Users.FindAsync(user.Id);

            if (existingUser == null)
                throw new ApplicationException("Usuário não encontrado.");

            existingUser.Nome = user.Nome;
            existingUser.SobreNome = user.SobreNome;
            existingUser.Email = user.Email;

            if (!string.IsNullOrWhiteSpace(password))
            {
                existingUser.Password = password;
            }

            await _context.SaveChangesAsync();
        }

        public async Task UpdatePassword(UpdatePasswordRequest updatePasswordRequest)
        {
            var existingUser = await _context.Users.SingleOrDefaultAsync(u => u.Email == updatePasswordRequest.Email);
            if (existingUser == null) throw new ApplicationException("Émail não cadastrado!");

            if (!ValidacaoSenha(updatePasswordRequest.newPassword)) throw new ApplicationException("Senha não tem os requisitos necessários");

            existingUser.Password = updatePasswordRequest.newPassword;

            await _context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<User> GetByEmail(string email)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == email);

            return user;
        }
    }
}
