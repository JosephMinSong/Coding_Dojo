#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ECommerce.Models;

public class CustomerViewModel
{
    public Customer newCustomer {get;set;}
    public List<Customer> allCustomers {get;set;}
}