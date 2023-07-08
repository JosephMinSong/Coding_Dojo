using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DojoSurvey.Models;

namespace DojoSurvey.Controllers;

public class SurveyController : Controller
{
    static Survey userSurvey;
    private readonly ILogger<SurveyController> _logger;

    public SurveyController(ILogger<SurveyController> logger)
    {
        _logger = logger;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost("process")]
    public IActionResult Process(Survey newSurvey)
    {
        if (ModelState.IsValid)
        {
            userSurvey = newSurvey;
            // To use ViewModel, we would need to pass in newSurvey into our Redirect
            return RedirectToAction("Result");
        }
        else
        {
            return View("Index");
        }
    }

    [HttpGet("result")]
    public IActionResult Result()
    {   
        // From here, we would make a ViewModel
        // Survey ViewModel = newSurvey
        // and then pass this into our view so we can use it
        return View(userSurvey);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
