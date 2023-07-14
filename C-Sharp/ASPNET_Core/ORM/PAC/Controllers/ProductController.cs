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

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
