#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace PAC.Models;

public class Product
{
    [Key]
    public int ProductId {get;set;}

    [Required]
    public string Name {get;set;}

    [Required]
    public string Description {get;set;}

    [Required]
    [Range(0, double.PositiveInfinity , ErrorMessage = "Price cannot be negative")]
    public double Price {get;set;}

    public List<Association> Associations {get;set;} = new List<Association>();

    public DateTime CreatedAt {get;set;} = DateTime.Now;

    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}