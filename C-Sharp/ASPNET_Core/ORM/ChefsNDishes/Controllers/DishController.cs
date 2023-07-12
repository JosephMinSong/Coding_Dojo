using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using ChefsNDishes.Models;

public class DishController : Controller
{
    private readonly ILogger<DishController> _logger;

    private MyContext db;

    public DishController(ILogger<DishController> logger, MyContext context)
    {
        _logger = logger;

        db = context;
    }

    [HttpGet("dishes")]
    public IActionResult Dishes()
    {   
        List<Dish> ViewModel = db.Dishes.Include(x => x.Creator).ToList();
        return View(ViewModel);
    }

    [HttpGet("dishes/add")]
    public IActionResult AddDish()
    {   
        ViewBag.allChefs = db.Chefs.ToList();
        return View();
    }

    [HttpPost("dishes/create")]
    public IActionResult ProcessDish(Dish newDish)
    {
        if (!ModelState.IsValid)
        {
            return View("AddDish");
        }

        db.Dishes.Add(newDish);
        db.SaveChanges();
        return RedirectToAction("Dishes");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}