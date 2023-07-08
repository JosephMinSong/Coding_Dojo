using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SessionWorkshop.Models;

namespace SessionWorkshop.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    [HttpGet("")]
    public IActionResult Index()
    {   
        HttpContext.Session.SetInt32("number", 22);
        return View();
    }

    [HttpPost("process")]
    public IActionResult Process(User newUser)
    {
        if (ModelState.IsValid)
        {   
            HttpContext.Session.SetString("sessionUser", newUser.Username);
            return RedirectToAction("Dashboard");
        }
        else
        {
            return View("Index");
        }
    }

    [HttpGet("dashboard")]
    public IActionResult Dashboard()
    {
        if (HttpContext.Session.GetString("sessionUser") == null)
        {
            return RedirectToAction("Index");
        }
        ViewBag.sessionUsername = HttpContext.Session.GetString("sessionUser");
        return View("Dashboard");
    }

    [HttpPost("changeNumber")]
    public IActionResult ChangeNumber(string operation)
    {
        int? sessionNumber = HttpContext.Session.GetInt32("number");
        if(operation == "add")
        {
            sessionNumber += 1;
            HttpContext.Session.SetInt32("number", (int)sessionNumber);
        }
        if(operation == "minus")
        {
            sessionNumber -= 1;
            HttpContext.Session.SetInt32("number", (int)sessionNumber);
        }
        if(operation == "times")
        {
            sessionNumber *= 2;
            HttpContext.Session.SetInt32("number", (int)sessionNumber);
        }
        if(operation == "random")
        {
            Random rand = new Random();
            sessionNumber += rand.Next(1, 11);
            HttpContext.Session.SetInt32("number", (int)sessionNumber);
        }
        return RedirectToAction("Dashboard");
    }

    [HttpPost("logout")]
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
