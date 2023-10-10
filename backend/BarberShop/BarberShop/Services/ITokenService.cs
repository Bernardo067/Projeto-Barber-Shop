using BarberShop.Models;

namespace BarberShop.Services
{
    public interface ITokenService
    {
        string GenerateJwtToken(User user);
        void InvalidateToken(string token);
        bool IsTokenInvalid(string token);
    }
}
