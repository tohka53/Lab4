using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

/* conection using*/
using Microsoft.Extensions.Configuration;
namespace AngularLab.Controllers
{


    public class HomeController : Controller
    {
    

        public IActionResult Index()
        {
        
            return View();
        }

        private string GetConectionString(string v)
        {
            throw new NotImplementedException();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
