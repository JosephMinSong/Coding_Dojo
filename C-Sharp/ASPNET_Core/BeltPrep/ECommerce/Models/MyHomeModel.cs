#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ECommerce.Models;

public class MyHomeModel
{
    public List<Product> AllProducts {get;set;}
    public List<Customer> AllCustomers {get;set;}
    public List<Order> AllOrders {get;set;} 
}