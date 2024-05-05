using Interfaces;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace controller
{

    [ApiController]
    [Route("api/[controller]")]
    public class userController : ControllerBase
    {

        IUserInterface UserService;

        public userController(IUserInterface userService)
        {
            UserService = userService;
        }

        [HttpGet("{email}/{password}")]
        public ActionResult<User> Get(string email, string password)
        {
            return UserService.GetByDetails(email, password);
        }


        [HttpPut("{email}")]
        public ActionResult<bool> Post(string email ,[FromBody] User user)
        {
            return UserService.AddSendCv(email , user);
        } 

    }
}