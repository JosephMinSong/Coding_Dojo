#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ChefsNDishes.Models;

public class Dish
{
    [Key]
    public int DishId {get;set;}

    public string Name {get;set;}

    public int Calories {get;set;}

    public int Tastiness {get;set;}

    public int ChefId {get;set;}

    public Dish? Creator {get;set;}
}