#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
public class Form
{
    [Required]
    [MinLength(2, ErrorMessage = "Name must be longer than 2 characters")]
    public string Name {get;set;}

    [Required]
    [DataType(DataType.EmailAddress)]
    [RegularExpression(@"[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+", ErrorMessage = "Email must be in a valid format")]
    public string Email {get;set;}

    [Required]
    [DataType(DataType.Date)]
    [BeforeDate]
    public DateTime Birthday {get;set;}

    [Required]
    [DataType(DataType.Password)]
    [MinLength(8, ErrorMessage = "Password must be longer than 8 characters")]
    public string Password {get;set;}

    [Required]
    [IsPrimeNumber]
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

// Odd validation
// public class OddNumberAttribute : ValidationAttribute
// {
//     protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
//     {
//         if((int)value % 2 == 0)
//         {
//             return new ValidationResult("Number must be an odd number. This number is even");
//         }
//         else
//         {
//             return ValidationResult.Success;
//         }
//     }
// }

// Prime validation
public class IsPrimeNumberAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if ((int)value % 2 == 0)
        {
            return new ValidationResult("Number must be a prime number");
        }
        
        double limit = Math.Sqrt((int)value);
        for(int i = 2; i <= limit; i++)
        {
            if ((int)value % i == 0)
            {
                return new ValidationResult("Number must be a prime number");
            }
        }
        return ValidationResult.Success;
    }
}