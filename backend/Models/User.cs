namespace Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public Type Type { get; set; }

        public User(int id , string name ,string password, Type type)
        {
            Id = id;
            Name = name;
            Password = password;
            Type = type;
        }
    }


}
