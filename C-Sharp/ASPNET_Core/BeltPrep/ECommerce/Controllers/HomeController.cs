using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using ECommerce.Models;

namespace ECommerce.Controllers;

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
        MyHomeModel ViewModel = new MyHomeModel
        {
            AllProducts = db.Products
                                .OrderByDescending(x => x.CreatedAt)
                                .Take(5)
                                .ToList(),

            AllCustomers = db.Customers
                                .OrderByDescending(x => x.CreatedAt)
                                .Take(3)
                                .ToList(),

            AllOrders = db.Orders
                                .Include(x => x.Customer)
                                .Include(x => x.Product)
                                .OrderByDescending(x => x.CreatedAt)
                                .Take(3)
                                .ToList()
        };
        return View();
    }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
