using BarberShop.Models;
using Microsoft.EntityFrameworkCore;

namespace BarberShop.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // Access IConfiguration through ServiceProvider
                var serviceProvider = new ServiceCollection()
                    .AddSingleton<IConfiguration>(provider =>
                    {
                        var serviceScope = provider.GetRequiredService<IServiceScopeFactory>().CreateScope();
                        return serviceScope.ServiceProvider.GetRequiredService<IConfiguration>();
                    })
                    .BuildServiceProvider();

                var configuration = serviceProvider.GetService<IConfiguration>();
                string connectionString = configuration["ConnectionStrings:DefaultSQLConnection"];

                optionsBuilder.UseSqlServer(connectionString);
            }
        }
    }
}
