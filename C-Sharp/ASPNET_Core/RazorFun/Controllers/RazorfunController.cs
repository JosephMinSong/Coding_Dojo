using Microsoft.AspNetCore.Mvc;

namespace Razorfun.Controllers;

public class RazorfunController : Controller {

    [HttpGet("")]
    public ViewResult Index(){
        return View();
    }

}