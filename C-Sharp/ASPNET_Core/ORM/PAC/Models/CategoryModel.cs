#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace PAC.Models;

public class Category
{
    [Key]
    public int CategoryId {get;set;}

    [Required]
    public string Name {get;set;}

    public List<Association> Associations {get;set;} = new List<Association>();

    public DateTime CreatedAt {get;set;} = DateTime.Now;

    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}