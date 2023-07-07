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
        userSurvey = newSurvey;
        return RedirectToAction("Result");
    }

    [HttpPost("result")]
    public IActionResult Result()
    {
        return View(userSurvey);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
