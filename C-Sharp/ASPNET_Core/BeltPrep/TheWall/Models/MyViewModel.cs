#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TheWall.Models;

public class MyViewModel
{   
    public User LoggedUser {get;set;}
    public Message Message {get;set;}
    public List<Message> AllMessages{get;set;}
}