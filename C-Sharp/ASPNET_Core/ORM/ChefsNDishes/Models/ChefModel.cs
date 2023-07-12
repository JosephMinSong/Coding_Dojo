#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ChefsNDishes.Models;

public class Chef
{
    [Key]
    public int ChefId {get;set;}

    [Required]
    public string FirstName {get;set;}

    [Required]
    public string LastName {get;set;}

    [Required]
    [DataType(DataType.Date)]
    [BeforeDate]
    public DateTime Birthday {get;set;}

    public List<Dish> AllDishes {get;set;} = new List<Dish>();
}

public class BeforeDateAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        
        if((DateTime)value > DateTime.Now)
        {
            return new ValidationResult("This is in the future! Please enter a date from the past...");  
        } 
        else 
        {
            return ValidationResult.Success;
        }
    }
}