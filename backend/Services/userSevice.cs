using System.Text.Json;
using Interfaces;
using Microsoft.AspNetCore.Routing.Constraints;
using Models;

namespace Services
{
    public class UserService : IUserInterface
    {

        private List<User> Users;

        private string PathFile;

        public UserService(){
            this.PathFile = Path.Combine("Data", "users.json");
            using (var jsonFile = File.OpenText(PathFile))
            {
                Users = JsonSerializer.Deserialize<List<User>>(jsonFile.ReadToEnd(),
                new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });
            }
        }

        public User GetByDetails(string email, string password)
        {
            return Users.FirstOrDefault(u => u.Password==password && u.Email==email);
        }
    }

}