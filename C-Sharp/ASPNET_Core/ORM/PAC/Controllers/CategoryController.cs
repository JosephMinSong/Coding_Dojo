using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using PAC.Models;

namespace PAC.Controllers;

public class CategoryController : Controller
{
    private readonly ILogger<CategoryController> _logger;

    private MyContext db;

    public CategoryController(ILogger<CategoryController> logger, MyContext context)
    {
        _logger = logger;

        db = context;
    }

    [HttpGet("categories")]
    public IActionResult Index()
    {   
        ViewBag.allCategories = db.Categories.ToList();
        return View();
    }

    [HttpGet("categories/{id}")]
    public IActionResult ShowCategory(int id)
    {
        Category? category = db.Categories.Include(x => x.Associations).ThenInclude(z => z.Product).FirstOrDefault(y => y.CategoryId == id);
        List<Category> allCategoriesFromDB = db.Categories.ToList();

        return View();
    }

    [HttpPost("categories/create")]
    public IActionResult CreateCategory(Category newCategory)
    {
        if (!ModelState.IsValid)
        {   
            ViewBag.allCategories = db.Categories.ToList();
            return View("Index");
        }
        db.Categories.Add(newCategory);
        db.SaveChanges();
        return RedirectToAction("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
