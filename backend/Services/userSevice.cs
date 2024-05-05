using System.Text.Json;
using Interfaces;
using Microsoft.AspNetCore.Routing.Constraints;
using Models;
using System.IO;


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

        private void saveToFile()
        {
            File.WriteAllText(PathFile, JsonSerializer.Serialize(Users));
        }

        public User GetByDetails(string email, string password)
        {
            return Users.FirstOrDefault(u => u.Password==password && u.Email==email);
        }

        public bool AddSendCv(string email , User user){
            if(user.Email == email){
                User userToUpdate = Users.FirstOrDefault(u=> u.Email==email);
                int index = Users.IndexOf(userToUpdate);
                if (index != -1 ){
                    Users[index].CountOfCVsSent++;
                    saveToFile();
                    return true;
                }  
            }
            return false;
            
        }
    }

}