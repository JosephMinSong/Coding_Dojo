using Microsoft.AspNetCore.Mvc;

namespace Razorfun.Controllers;

public class RazorfunController : Controller 
{

    [HttpGet("")]
    public ViewResult Index()
    {

        ViewBag.WordList = new List<string>() {"Apple Pie", "Pizza", "Cinnamon Rolls", "Lasagna", "Donuts", "Chocolate Cake", "Burritos"};

        return View();
    }

}