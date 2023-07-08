#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

public class User
{
    [Required]
    public string Username {get;set;}
}