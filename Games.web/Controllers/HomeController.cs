using Games.web.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Games.web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Hangman()
        {
            return View();
        }

        public IActionResult Mastermind()
        {
            return View();
        }

        public IActionResult Memory()
        {
            return View();
        }


    }
}