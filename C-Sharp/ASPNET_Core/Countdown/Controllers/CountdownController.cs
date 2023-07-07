using Microsoft.AspNetCore.Mvc;

namespace Countdown.Controllers;

public class CountdownController : Controller {

    [HttpGet("")]
    public ViewResult Index(){
        // Format for view
        string dateFormat = "MMM dd, yyyy hh:mm:ss tt";

        // Current DateTime
        DateTime current = DateTime.Now;
        ViewBag.currentDate = current.ToString(dateFormat);

        // End DateTime (Hardcoded)
        DateTime endTime = new DateTime(2029, 1, 1, 0, 0, 0);
        ViewBag.endTimeView = endTime.ToString(dateFormat);

        TimeSpan duration = endTime - current;

        int years = 0; 
        int days = duration.Days;

        if (duration.Days >= 365){
            years = duration.Days/365;
            days -= years*365;
        }

        ViewBag.Years = years;
        ViewBag.Days = days;
        ViewBag.Hours = duration.Hours;
        ViewBag.Minutes = duration.Minutes;
        ViewBag.Seconds = duration.Seconds;

        return View();
    }

}