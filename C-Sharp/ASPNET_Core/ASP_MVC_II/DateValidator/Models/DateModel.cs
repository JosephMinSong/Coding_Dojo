#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace DateValidator.Models;

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

public class DateModel
{
    [Required]
    [DataType(DataType.Date)]
    [BeforeDate]
    public DateTime UserDate {get;set;}
}