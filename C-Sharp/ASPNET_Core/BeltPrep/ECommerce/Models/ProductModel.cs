#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ECommerce.Models;

public class Product
{
    [Key]
    public int ProductId {get;set;}

    [Required]
    public string Name {get;set;}

    [Required]
    [DataType(DataType.Url)]
    public string Image {get;set;}

    [Required]
    public int ProductQuantity {get;set;}

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;

    public List<Order> Orders {get;set;} = new List<Order>();
}