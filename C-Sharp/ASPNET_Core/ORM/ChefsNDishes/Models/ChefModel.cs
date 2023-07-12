#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ChefsNDishes.Models;

public class Chef
{
    [Key]
    public int ChefId {get;set;}

    [Required(ErrorMessage = "First Name is required")]
    [Display(Name = "First Name:")]
    public string FirstName {get;set;}

    [Required(ErrorMessage = "Last Name is required")]
    [Display(Name = "Last Name:")]
    public string LastName {get;set;}

    [Required]
    [DataType(DataType.Date)]
    [BirthdayValidator]
    [Display(Name = "Date of Birth:")]
    public DateTime Birthday {get;set;}

    public List<Dish> AllDishes {get;set;} = new List<Dish>();
}

public class BirthdayValidatorAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        
        if((DateTime)value > DateTime.Now)
        {
            return new ValidationResult("This is in the future! Please enter a date from the past...");  
        } 
        else
        {
            TimeSpan diff = DateTime.Now.Date - (DateTime)value;
            int years = diff.Days/365;
            if(years < 18)
            {
                return new ValidationResult($"According to our calculations, you are {years} years old and too young to register");
            }
            else
            {
                return ValidationResult.Success;
            }
        }
    }
}