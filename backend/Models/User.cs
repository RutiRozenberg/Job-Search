namespace Models
{
    public class User
    {
        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public Type Type { get; set; }

        public User(string email , string name ,string password, Type type)
        {
            Email= email;
            Name = name;
            Password = password;
            Type = type;
        }
    }


}
