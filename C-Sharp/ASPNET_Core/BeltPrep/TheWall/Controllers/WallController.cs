using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using TheWall.Models;

namespace TheWall.Controllers;

public class WallController : Controller
{
    private readonly ILogger<WallController> _logger;

    public WallController(ILogger<WallController> logger)
    {
        _logger = logger;
    }

    // WALL HOME PAGE
    [HttpGet("/messages")]
    public IActionResult Index()
    {
        return View();
    }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
