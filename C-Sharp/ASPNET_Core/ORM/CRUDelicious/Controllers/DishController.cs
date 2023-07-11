using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CRUDelicious.Models;

namespace CRUDelicious.Controllers;

public class DishController : Controller
{
    private readonly ILogger<DishController> _logger;

    private MyContext _context;

    public DishController(ILogger<DishController> logger, MyContext context)
    {
        _logger = logger;

        _context = context;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        List<Dish> ViewModel = _context.Dishes.ToList();
        return View(ViewModel);
    }

    [HttpGet("/add")]
    public IActionResult Add()
    {
        return View();
    }

    [HttpGet("dishes/{id}")]
    public IActionResult ShowDish(int id)
    {
        Dish? ViewModel = _context.Dishes.FirstOrDefault(x => x.DishId == id);
        return View(ViewModel);
    }

    [HttpGet("dishes/{DishId}/edit")]
    public IActionResult EditDish(int DishId)
    {
        Dish? ViewModel = _context.Dishes.FirstOrDefault(x => x.DishId == DishId);
        return View(ViewModel);
    }

    [HttpPost("ProcessAdd")]
    public IActionResult ProcessAdd(Dish newDish)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newDish);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        else
        {
            return View("Add");
        }
    }

    [HttpPost("dishes/{DishId}/delete")]
    public IActionResult Destroy(int DishId)
    {
        Dish? DishToDelete = _context.Dishes.SingleOrDefault(x => x.DishId == DishId);
        _context.Dishes.Remove(DishToDelete);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
