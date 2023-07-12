#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
namespace ChefsNDishes.Models;

public class ChefContext : DbContext 
{   
    public ChefContext(DbContextOptions options) : base(options) { }    
    public DbSet<Chef> Chefs { get; set; } 
}