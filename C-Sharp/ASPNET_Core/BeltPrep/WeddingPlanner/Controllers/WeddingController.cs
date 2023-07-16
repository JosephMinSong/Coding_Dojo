using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using WeddingPlanner.Models;

namespace WeddingPlanner.Controllers;

[SessionCheck]
public class WeddingController : Controller
{
    private readonly ILogger<WeddingController> _logger;

    private MyContext db;

    public WeddingController(ILogger<WeddingController> logger, MyContext context)
    {
        _logger = logger;

        db = context;
    }

    // INDEX PAGE
    [HttpGet("weddings")]
    public IActionResult Index()
    {   
        List<Wedding> allWeddings = db.Weddings
                                        .Include(x => x.Associations)
                                        .ToList();

        ViewBag.loggedUser = db.Users.FirstOrDefault(x => x.UserId == HttpContext.Session.GetInt32("loggedUserId"));
        return View(allWeddings);
    }

    // PLAN A WEDDING PAGE
    [HttpGet("weddings/add")]
    public IActionResult Plan()
    {
        ViewBag.loggedUser = db.Users.FirstOrDefault(x => x.UserId == HttpContext.Session.GetInt32("loggedUserId"));
        return View();
    }

    // CREATE A WEDDING PAGE
    [HttpPost("weddings/create")]
    public IActionResult CreateWedding(Wedding newWedding)
    {
        if(!ModelState.IsValid)
        {   
            ViewBag.loggedUser = db.Users.FirstOrDefault(x => x.UserId == HttpContext.Session.GetInt32("loggedUserId"));
            return View("Plan");
        }
        db.Weddings.Add(newWedding);
        db.SaveChanges();
        return RedirectToAction("ShowOne", new {WeddingId = newWedding.WeddingId});
    }

    // SHOW ONE WEDDING
    [HttpGet("/weddings/{WeddingId}")]
    public IActionResult ShowOne(int WeddingId)
    {
        Wedding? wedding = db.Weddings
                            .Include(x => x.Associations)
                            .ThenInclude(x => x.User)
                            .FirstOrDefault(x => x.WeddingId == WeddingId);
        ViewBag.loggedUser = db.Users.FirstOrDefault(x => x.UserId == HttpContext.Session.GetInt32("loggedUserId"));
        return View(wedding);
    }

    // DELETE A WEDDING
    [HttpPost("weddings/{WeddingId}/delete")]
    public IActionResult DeleteOne(int WeddingId)
    {
        Wedding? weddingToDelete = db.Weddings.FirstOrDefault(x => x.WeddingId == WeddingId);
        int? LoggedUser = (int)HttpContext.Session.GetInt32("loggedUserId");
        if(weddingToDelete.UserId == LoggedUser)
        {
            db.Weddings.Remove(weddingToDelete);
            db.SaveChanges();
            return RedirectToAction("Index");
        } 
        else 
        {
            return RedirectToAction("Index");
        }
    }

    // TOGGLE RSVP
    [HttpPost("weddings/{WeddingId}/RSVP")]
    public IActionResult ToggleRSVP(int WeddingId, int UserId)
    {
        Association? existingRSVP = db.Associations
                                        .FirstOrDefault(x => x.UserId == UserId && x.WeddingId == WeddingId);
        if(existingRSVP != null)
        {
            db.Associations.Remove(existingRSVP);
        }
        else
        {
            Association newAssociation = new Association()
            {
                WeddingId = WeddingId,
                UserId = UserId
            };
            db.Associations.Add(newAssociation);
        }
        db.SaveChanges();
        return RedirectToAction("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

public class SessionCheckAttribute : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        int? userId = context.HttpContext.Session.GetInt32("loggedUserId");
        if(userId == null)
        {
            // Redirect to the Index page if there was nothing in session
            // "Home" here is referring to "HomeController", you can use any controller that is appropriate here
            context.Result = new RedirectToActionResult("Index", "LAR", null);
        }
    }
}
