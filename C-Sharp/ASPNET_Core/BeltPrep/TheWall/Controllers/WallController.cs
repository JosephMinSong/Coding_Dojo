using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using TheWall.Models;

namespace TheWall.Controllers;

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
        List<Message> allMessages = db.Messages.ToList();
        User? loggedUser = db.Users.FirstOrDefault(x => x.UserId == HttpContext.Session.GetInt32("loggedUserId"));

        MyViewModel MyViewModel = new MyViewModel
        {   
            LoggedUser = loggedUser,
            AllMessages = allMessages
        };
        return View(MyViewModel);
    }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
