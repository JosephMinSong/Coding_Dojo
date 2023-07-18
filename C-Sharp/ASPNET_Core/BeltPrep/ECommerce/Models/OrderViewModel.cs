#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ECommerce.Models;

public class OrderViewModel
{
    public Order newOrder {get;set;}
    public List<Order> allOrders {get;set;}
}