using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using ChefsNDishes.Models;

namespace ChefsNDishes.Controllers;

public class ChefController : Controller
{
    private readonly ILogger<ChefController> _logger;

    private MyContext db;

    public ChefController(ILogger<ChefController> logger, MyContext context)
    {
        _logger = logger;

        db = context;
    }

    [HttpGet("")]
    public IActionResult Index()
    {   
        List<Chef> ViewModel = db.Chefs.Include(x => x.AllDishes).ToList();


        return View(ViewModel);
    }

    [HttpGet("chefs/add")]
    public IActionResult AddChef()
    {
        return View();
    }

    [HttpPost("chefs/create")]
    public IActionResult ProcessChef(Chef newChef)
    {
        if(!ModelState.IsValid)
        {
            return View("AddChef");
        }

        db.Chefs.Add(newChef);
        db.SaveChanges();
        return RedirectToAction("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
