using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using TheWall.Models;

namespace TheWall.Controllers;

[SessionCheck]
public class WallController : Controller
{
    private readonly ILogger<WallController> _logger;

    private MyContext db;

    public WallController(ILogger<WallController> logger, MyContext context)
    {
        _logger = logger;

        db = context;
    }

    // WALL HOME PAGE
    [HttpGet("/messages")]
    public IActionResult Index()
    {   
        List<Message> allMessages = db.Messages
                                        .Include(x => x.Creator)
                                        .Include(x => x.Comments)
                                        .ThenInclude(x => x.Creator)
                                        .ToList();

        User? loggedUser = db.Users.FirstOrDefault(x => x.UserId == HttpContext.Session.GetInt32("loggedUserId"));

        MyViewModel MyViewModel = new MyViewModel //Includes Message Model and Comment Model
        {   
            LoggedUser = loggedUser,
            AllMessages = allMessages
        };
        return View(MyViewModel);
    }

    // Create Message
    [HttpPost("messages/create")]
    public IActionResult CreateMessage(Message newMessage)
    {   
        User? loggedUser = db.Users.FirstOrDefault(x => x.UserId == HttpContext.Session.GetInt32("loggedUserId"));

        if(!ModelState.IsValid)
        {
            List<Message> allMessages = db.Messages
                                        .Include(x => x.Creator)
                                        .Include(x => x.Comments)
                                        .ThenInclude(x => x.Creator)
                                        .ToList();

            MyViewModel MyViewModel = new MyViewModel
            {   
                LoggedUser = loggedUser,
                AllMessages = allMessages
            };
            return View("Index", MyViewModel);
        }
        
        newMessage.UserId = loggedUser.UserId;
        db.Messages.Add(newMessage);
        db.SaveChanges();
        return RedirectToAction("Index");
    }

    // Edit Message
    [HttpGet("messages/{MessageId}/edit")]
    public IActionResult EditMessage(int MessageId)
    {
        User? loggedUser = db.Users.FirstOrDefault(x => x.UserId == HttpContext.Session.GetInt32("loggedUserId"));
        List<Message> allMessages = db.Messages
                                    .Include(x => x.Creator)
                                    .Include(x => x.Comments)
                                    .ThenInclude(x => x.Creator)
                                    .ToList();
        Message? toEditMessage = db.Messages
                                    .FirstOrDefault(x => x.UserId == loggedUser.UserId && x.MessageId == MessageId);
        MyViewModel MyViewModel = new MyViewModel
        {   
            LoggedUser = loggedUser,
            AllMessages = allMessages,
            Message = toEditMessage
        };  
        return View("Edit", MyViewModel);
    }

    // Process Edit Message
    [HttpPost("messages/{MessageId}/edit")]
    public IActionResult ProcessEditMessage(Message editedMessage, int MessageId)
    {
        User? loggedUser = db.Users.FirstOrDefault(x => x.UserId == HttpContext.Session.GetInt32("loggedUserId"));
        Message? toEditMessage = db.Messages
                                        .FirstOrDefault(x => x.UserId == loggedUser.UserId && x.MessageId == MessageId);
        if(!ModelState.IsValid)
        {
            List<Message> allMessages = db.Messages
                                        .Include(x => x.Creator)
                                        .Include(x => x.Comments)
                                        .ThenInclude(x => x.Creator)
                                        .ToList();

            MyViewModel MyViewModel = new MyViewModel
            {   
                LoggedUser = loggedUser,
                AllMessages = allMessages,
                Message = toEditMessage
            };
            return View("Index", MyViewModel);
        }

        toEditMessage.MessageContent = editedMessage.MessageContent;
        toEditMessage.UpdatedAt = DateTime.Now;
        db.Messages.Update(toEditMessage);
        db.SaveChanges();
        return RedirectToAction("Index");
    }

    // Delete Message
    [HttpPost("messages/{MessageId}/delete")]
    public IActionResult DeleteMessage(int MessageId)
    {
        User? loggedUser = db.Users.FirstOrDefault(x => x.UserId == HttpContext.Session.GetInt32("loggedUserId"));
        Message? existingMessage = db.Messages.FirstOrDefault(x => x.MessageId == MessageId);
        if(existingMessage != null && existingMessage.UserId == loggedUser.UserId)
        {
            db.Messages.Remove(existingMessage);
            db.SaveChanges();
        }
        return RedirectToAction("Index");
    }

    // Create Comment
    [HttpPost("comments/{MessageId}/create")]
    public IActionResult CreateComment(Comment newComment, int MessageId)
    {   
        User? loggedUser = db.Users.FirstOrDefault(x => x.UserId == HttpContext.Session.GetInt32("loggedUserId"));
        newComment.MessageId = MessageId;
        newComment.UserId = loggedUser.UserId;

        if (!ModelState.IsValid)
        {   
            List<Message> allMessages = db.Messages
                                        .Include(x => x.Creator)
                                        .Include(x => x.Comments)
                                        .ThenInclude(x => x.Creator)
                                        .ToList();

            MyViewModel MyViewModel = new MyViewModel
            {   
                LoggedUser = loggedUser,
                AllMessages = allMessages
            };
            ViewBag.Error = MessageId;
            return View("Index", MyViewModel);
        }
        db.Comments.Add(newComment);
        db.SaveChanges();
        return RedirectToAction("Index");
    }

    // Delete Comment
    [HttpPost("comments/{CommentId}/delete")]
    public IActionResult DeleteComment(int CommentId)
    {
        User? loggedUser = db.Users.FirstOrDefault(x => x.UserId == HttpContext.Session.GetInt32("loggedUserId"));
        Comment? existingComment = db.Comments.FirstOrDefault(x => x.CommentId == CommentId);
        if(existingComment != null && existingComment.UserId == loggedUser.UserId)
        {
            db.Comments.Remove(existingComment);
            db.SaveChanges();
        }
        return RedirectToAction("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

public class SessionCheckAttribute : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        int? userId = context.HttpContext.Session.GetInt32("loggedUserId");
        if(userId == null)
        {
            // Redirect to the Index page if there was nothing in session
            // "Home" here is referring to "HomeController", you can use any controller that is appropriate here
            context.Result = new RedirectToActionResult("Index", "LAR", null);
        }
    }
}