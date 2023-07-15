using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using PAC.Models;

namespace PAC.Controllers;

public class ProductController : Controller
{
    private readonly ILogger<ProductController> _logger;

    private MyContext db;

    public ProductController(ILogger<ProductController> logger, MyContext context)
    {
        _logger = logger;

        db = context;
    }

    [HttpGet("")]
    public IActionResult Index()
    {   
        ViewBag.allProducts = db.Products.ToList();
        return View();
    }

    [HttpPost("/products/create")]
    public IActionResult CreateProduct(Product newProduct)
    {
        if (!ModelState.IsValid)
        {   
            ViewBag.allProducts = db.Products.ToList();
            return View("Index");
        }
        db.Products.Add(newProduct);
        db.SaveChanges();
        return RedirectToAction("Index");
    }

    [HttpGet("products/{id}")]
    public IActionResult ShowProduct(int id)
    {
        ViewBag.product = db.Products 
                                .Include(x => x.Associations) 
                                .ThenInclude(z => z.Category) 
                                .FirstOrDefault(y => y.ProductId == id); 

        ViewBag.allUnrelatedCategories = db.Categories 
                                .Include(x => x.Associations) 
                                .Where(cat => cat.Associations 
                                    .Any(association => association.ProductId == id) == false) 
                                .ToList();
        return View();
    }

    [HttpPost("products/association/{ProductId}")]
    public IActionResult ToggleProdCatAssociation(int ProductId, int CategoryId)
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
        return RedirectToAction("ShowProduct", new {id = ProductId} );
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
