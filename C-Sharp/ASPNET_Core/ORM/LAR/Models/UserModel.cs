#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace LAR.Models;

public class User
{
    [Key]
    public int UserId {get;set;}

    [Required]
    [MinLength(2, ErrorMessage = "First name must be at least 2 characters long")]
    public string FirstName {get;set;}

    [Required]
    [MinLength(2, ErrorMessage = "Last name must be at least 2 characters long")]
    public string LastName {get;set;}

    [UniqueEmail]
    [DataType(DataType.EmailAddress)]
    [RegularExpression(@"[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+", ErrorMessage = "Email must be in a valid format")]
    public string Email {get;set;}

    [Required]
    [DataType(DataType.Password)]
    [MinLength(8, ErrorMessage = "Password must be longer than 8 characters")]
    public string Password {get;set;}

    [NotMapped]
    [Compare("Password")]
    [DataType(DataType.Password)]
    public string ConfirmPassword {get;set;}

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}

public class UniqueEmailAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if (value == null)
        {
            return new ValidationResult("Email is required");
        }

        MyContext _context = (MyContext)validationContext.GetService(typeof(MyContext));

        if (_context.Users.Any(x => x.Email == value.ToString()))
        {
            return new ValidationResult("Email already in database. Email must be unique");
        } 
        else 
        {
            return ValidationResult.Success;
        }
    }
}