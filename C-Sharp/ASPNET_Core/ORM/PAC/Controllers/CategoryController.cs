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
        ViewBag.category = db.Categories // Get all categories
                                .Include(x => x.Associations) // Include their associations
                                .ThenInclude(z => z.Product) // And then include the associations Products based on ProductID
                                .FirstOrDefault(y => y.CategoryId == id); // Get the category that matches the id that we have

        ViewBag.allUnrelatedProducts = db.Products // Get all products from DB
                                .Include(x => x.Associations) // Then include their associations (i.e. their relationships to categories)
                                .Where(prod => prod.Associations // Where the associations CategoryId doesn't equal
                                    .Any(association => association.CategoryId == id) == false) // the Id of the category that we're on
                                .ToList(); // Listed
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

    [HttpPost("categories/association/{CategoryId}")]
    public IActionResult ToggleCatProdAssociation(int CategoryId, int ProductId)
    {   
        Association? existingAssociation = db.Associations
                                                .FirstOrDefault(x => x.CategoryId == CategoryId && x.ProductId == ProductId);
        
        if(existingAssociation != null)
        {
            db.Associations.Remove(existingAssociation);
        }
        else
        {
            Association newAssociation = new Association()
            {
                ProductId = ProductId,
                CategoryId = CategoryId
            };
            db.Associations.Add(newAssociation);
        }
        db.SaveChanges();
        return RedirectToAction("ShowCategory", new {id = CategoryId});
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
