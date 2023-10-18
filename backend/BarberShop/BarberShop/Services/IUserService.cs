using BarberShop.Models;

namespace BarberShop.Services
{
    public interface IUserService
    {
        Task<User> Authenticate(string email, string password);
        Task<User> GetById(int id);
        Task<User> GetByEmail(string email);
        Task<List<User>> GetAll();
        Task UpdatePassword(UpdatePasswordRequest request);
        Task<User> Create(User user, string password);
        Task Update(User user, string password = null);
        Task Delete(int id);
    }
}
