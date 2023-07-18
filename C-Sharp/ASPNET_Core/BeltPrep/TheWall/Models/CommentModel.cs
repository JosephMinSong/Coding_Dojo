#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TheWall.Models;

public class Comment
{
    [Key]
    public int CommentId {get;set;}

    [Required(ErrorMessage = "Comment field cannot be empty")]
    public string CommentContent {get;set;}

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;

    // Required UserId to know who made the comment
    // We remove the "Required" part so that we can add it in our controller
    public int UserId {get;set;}

    // The creator is tied to the UserId
    public User? Creator {get;set;}

    // Required MessageId to know which message the comment is for
    public int MessageId {get;set;}

    // The message is tied to the comment
    public Message? Message {get;set;}
}