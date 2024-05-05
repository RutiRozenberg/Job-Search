using Models;

namespace Interfaces
{
    public interface IUserInterface
    {
        
        User GetByDetails(string email,string password);

        bool AddSendCv(string email , User user);
    
    } 
}
