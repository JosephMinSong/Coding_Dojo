#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace LAR.Models;

public class LoginUser
{
    [Required]
    [DataType(DataType.EmailAddress)]
    [RegularExpression(@"[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+", ErrorMessage = "Email must be in a valid format")]
    public string LoginEmail {get;set;}

    
    [Required]
    [DataType(DataType.Password)]
    public string LoginPassword {get;set;}
}