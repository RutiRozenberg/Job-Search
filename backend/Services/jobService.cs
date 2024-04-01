using System.Text.Json;
using Interfaces;
using Microsoft.AspNetCore.Routing.Constraints;
using Models;

namespace Services
{
    public class JobService : IJobInterface
    {

        private List<Job> Jobs;

        private string PathFile;

        public JobService(){
            this.PathFile = Path.Combine("Data", "jobs.json");
            using (var jsonFile = File.OpenText(PathFile))
            {
                Jobs = JsonSerializer.Deserialize<List<Job>>(jsonFile.ReadToEnd(),
                new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });
            }
        }
        List<Job> IJobInterface.GetAll()
        {
            return Jobs;
        }
    }

}