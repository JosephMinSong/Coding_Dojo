using Microsoft.AspNetCore.Mvc;

namespace Survey.Controllers;

public class SurveyController : Controller 
{
    [HttpGet("")]
    public ViewResult Index()
    {
        return View();
    }

    [HttpPost("processForm")]
    public IActionResult ProcessForm(string name, string location, string language, string comments)
    {

        Console.WriteLine($"{name}, {location}, {language}, {comments}");

        return RedirectToAction("Result", new {name=name, location=location, language=language, comments=comments});
    }

    [HttpGet("results")]
    public ViewResult Result(string name, string location, string language, string comments)
    {
        ViewBag.SurveyResults = new List<string>() {name, location, language, comments};

        return View();
    }
}
