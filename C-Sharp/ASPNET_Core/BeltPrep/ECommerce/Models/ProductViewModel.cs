#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ECommerce.Models;

public class ProductViewModel
{
    public Product newProduct {get;set;}
    public List<Product> allProducts {get;set;}
}