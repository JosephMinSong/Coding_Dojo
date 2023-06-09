#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ChefsNDishes.Models;

public class Dish
{
    [Key]
    public int DishId {get;set;}

    [Required]
    public string Name {get;set;}

    [Required]
    [Range(0, double.PositiveInfinity, ErrorMessage = "Calories must be greater than 0")]
    public int Calories {get;set;}

    [Required]
    public int Tastiness {get;set;}

    [Required]
    public int ChefId {get;set;}

    public Chef? Creator {get;set;}
}