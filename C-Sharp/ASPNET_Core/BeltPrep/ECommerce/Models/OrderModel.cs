#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ECommerce.Models;

public class Order
{
    [Key]
    public int OrderId {get;set;}

    [Required]
    public int CustomerId {get;set;}

    public Customer? Customer {get;set;}

    [Required]
    public int ProductId {get;set;}

    public Product? Product {get;set;}

    [Required]
    public int OrderQuantity {get;set;}

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}