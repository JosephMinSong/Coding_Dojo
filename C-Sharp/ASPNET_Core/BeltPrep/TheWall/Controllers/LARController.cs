using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using TheWall.Models;

namespace WeddingPlanner.Controllers;

public class LARController : Controller
{
    private readonly ILogger<LARController> _logger;

    private MyContext db;

    public LARController(ILogger<LARController> logger, MyContext context)
    {
        _logger = logger;

        db = context;
    }

    // LOGIN AND REGISTRATION PAGE
    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }
    
    // CREATE NEW USER 
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

        HttpContext.Session.SetInt32("loggedUserId", newUser.UserId);

        return RedirectToAction("Index", "Wall");
    }

    // LOGIN AN EXISTING USER
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

        return RedirectToAction("Index", "Wall");
    }

    // LOGOUT
    [HttpPost("users/logout")]
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
