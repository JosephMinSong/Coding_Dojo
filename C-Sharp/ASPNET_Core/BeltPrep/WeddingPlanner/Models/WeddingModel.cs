#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace WeddingPlanner.Models;

public class Wedding
{
    [Key]
    public int WeddingId {get;set;}

    [Required]
    public string WedderOne {get;set;}

    [Required]
    public string WedderTwo {get;set;}

    [Required]
    [DataType(DataType.Date)]
    [BeforeDate]
    public int WeddingDate {get;set;}

    [Required]
    public string WeddingAddress {get;set;}

    [Required]
    public int UserId{get;set;}

    public User? Creator {get;set;}

    public List<Association> Associations {get;set;} = new List<Association>();

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
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