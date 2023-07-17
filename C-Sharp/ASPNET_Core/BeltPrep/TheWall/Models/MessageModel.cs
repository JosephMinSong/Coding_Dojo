#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TheWall.Models;

public class Message
{
    [Key]
    public int MessageId {get;set;}

    [Required(ErrorMessage = "Message field cannot be empty")]
    public string Content {get;set;}

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;

    // So we know who made the message
    [Required]
    public int UserId {get;set;}

    public User? Creator {get;set;}

    // A message can have many Comments, that hold who the creator is and what message they are responding to
    public List<Comment> Comments = new List<Comment>();
}