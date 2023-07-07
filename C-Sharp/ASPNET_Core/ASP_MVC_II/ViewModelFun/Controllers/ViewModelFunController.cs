using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers;

public class ViewModelFunController : Controller
{
    private readonly ILogger<ViewModelFunController> _logger;

    public ViewModelFunController(ILogger<ViewModelFunController> logger)
    {
        _logger = logger;
    }
    
    [HttpGet("")]
    public IActionResult Index()
    {
        string ViewModelString = "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.";

        return View("Index", ViewModelString);
    }

    [HttpGet("numbers")]
    public IActionResult Numbers()
    {
        List<int> ViewModel = new List<int>(){1,2,29,50,60,100};

        return View(ViewModel);
    }

    [HttpGet("user")]
    public IActionResult User(){
        UserModel One = new UserModel("Neil", "Gaiman");

        UserModel ViewModel = One;

        return View(ViewModel);
    }

    [HttpGet("users")]
    public IActionResult Users(){

        UserModel One = new UserModel("Neil", "Gaiman");
        UserModel Two = new UserModel("Terry", "Pratchet");
        UserModel Three = new UserModel("Jane", "Austen");
        UserModel Four = new UserModel("Stephen", "King");
        UserModel Five = new UserModel("Mary", "Shelley");

        List<UserModel> ViewModel = new List<UserModel>() {One, Two, Three, Four, Five};

        return View(ViewModel);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
