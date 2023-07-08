using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using FormSubmission.Models;

namespace FormSubmission.Controllers;

public class FormController : Controller
{

    static Form userForm;
    private readonly ILogger<FormController> _logger;

    public FormController(ILogger<FormController> logger)
    {
        _logger = logger;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet("success")]
    public IActionResult Success()
    {
        return View(userForm);
    }

    [HttpPost("process")]
    public IActionResult Process(Form newUserForm)
    {
        if(ModelState.IsValid)
        {   
            userForm = newUserForm;
            return RedirectToAction("Success");
        }
        else 
        {
            return View("Index");
        }
    }



    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
