using BarberShop.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BarberShop.Services
{
    public class TokenService : ITokenService
    {
        private readonly IConfiguration _configuration;
        private readonly HashSet<string> _invalidTokens = new HashSet<string>();


        public TokenService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public void InvalidateToken(string token)
        {
            _invalidTokens.Add(token);
        }

        public bool IsTokenInvalid(string token)
        {
            return _invalidTokens.Contains(token);
        }

        public string GenerateJwtToken(User user)
        {
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Secret"]));
            var tokenHandler = new JwtSecurityTokenHandler();

            var now = DateTime.UtcNow;
            var expires = now.AddMinutes(Convert.ToDouble(_configuration["Jwt:ExpiresInMinutes"]));

            // Adicionando um pequeno intervalo (1 minuto) ao tempo de expiração
            expires = expires.AddMinutes(1);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Email, user.Email)
        }),
                IssuedAt = now,
                NotBefore = now,
                Expires = expires,
                SigningCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

    }
}
