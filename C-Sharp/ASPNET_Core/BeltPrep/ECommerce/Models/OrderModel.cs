#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ECommerce.Models;

public class Order
{
    [Key]
    public int OrderId {get;set;}

    public int CustomerId {get;set;}

    public Customer? Customer {get;set;}

    public int ProductId {get;set;}

    public Product? Product {get;set;}

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}