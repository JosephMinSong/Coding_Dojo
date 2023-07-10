#pragma warning disable CS8618

using Microsoft.EntityFrameworkCore;
namespace FirstConnection.Models;

public class Pet
{
    public string Name {get;set;}

    public string Type {get;set;}

    public int Age {get;set;}

    public bool HasFur {get;set;}
    
}