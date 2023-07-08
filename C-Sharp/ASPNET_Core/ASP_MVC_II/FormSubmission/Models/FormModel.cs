#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
public class Form
{
    [Required]
    [MinLength(2, ErrorMessage = "Name must be longer than 2 characters")]
    public string Name {get;set;}

    [Required]
    [RegularExpression(@"[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+", ErrorMessage = "Email must be in a valid format")]
    public string Email {get;set;}

    [Required]
    [DataType(DataType.Date)]
    [BeforeDate]
    public DateTime Birthday {get;set;}

    [Required]
    [MinLength(8, ErrorMessage = "Password must be longer than 8 characters")]
    public string Password {get;set;}

    [Required]
    public int FavoriteOdd {get;set;}
}

public class BeforeDateAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if((DateTime)value > DateTime.Now)
        {
            return new ValidationResult("Your birthday cannot be in the future");
        }
        else {
            return ValidationResult.Success;
        }
    }
}