using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using LAR.Models;

namespace LAR.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    private MyContext db;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;

        db = context;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

    [SessionCheck]
    [HttpGet("/success")]
    public IActionResult Success()
    {   
        int? loggedUserId = HttpContext.Session.GetInt32("loggedUserId");
        User ViewModel = db.Users.FirstOrDefault(x => x.UserId == loggedUserId);
        return View(ViewModel);
    }

    [HttpPost("/users/create")]
    public IActionResult CreateUser(User newUser)
    {
        if(!ModelState.IsValid)
        {
            return View("Index");
        }
        PasswordHasher<User> Hasher = new PasswordHasher<User>();
        newUser.Password = Hasher.HashPassword(newUser, newUser.Password);

        db.Add(newUser);
        db.SaveChanges();

        User loggedUser = db.Users.FirstOrDefault(x => x.Email == newUser.Email);

        HttpContext.Session.SetInt32("loggedUserId", loggedUser.UserId);

        return RedirectToAction("Success");
    }

    [HttpPost("/users/login")]
    public IActionResult Login(LoginUser loginUser)
    {   
        if(!ModelState.IsValid)
        {
            return View("Index");
        }

        User? existingUser = db.Users.FirstOrDefault(x => x.Email == loginUser.LoginEmail);

        if (existingUser == null)
        {
            ModelState.AddModelError("LoginEmail", "Invalid credentials");
            return View("Index");
        }

        PasswordHasher<LoginUser> hasher = new PasswordHasher<LoginUser>();
        var result = hasher.VerifyHashedPassword(loginUser, existingUser.Password, loginUser.LoginPassword);

        if (result == 0){
            ModelState.AddModelError("LoginEmail", "Invalid credentials");
            return View("Index");
        }
        HttpContext.Session.SetInt32("loggedUserId", existingUser.UserId);

        return RedirectToAction("Success");
    }

    [HttpGet("/users/logout")]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
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
                context.Result = new RedirectToActionResult("Index", "Home", null);
            }
        }
    }
