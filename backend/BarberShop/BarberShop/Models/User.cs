using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BarberShop.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        [Required]
        public string? Nome { get; set; }
        [Required]
        public string? SobreNome { get; set; }
        [Required]
        public string? Email { get; set; }
        [Required]
        public string? Password { get; set; }
        public TipoUsuario TipoUsuario { get; set; }

    }

    public enum TipoUsuario
    {
        Client,
        Admin,
        Barber
    }
}

