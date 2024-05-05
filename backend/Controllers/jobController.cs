using Interfaces;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace controller
{

    [ApiController]
    [Route("api/[controller]")]
    public class jobController : ControllerBase
    {

        IJobInterface JobService;

        public jobController(IJobInterface jobService)
        {
            JobService = jobService;
        }

        [HttpGet()]
        public ActionResult<List<Job>> Get()
        {
            return JobService.GetAll();
        }

    }
}