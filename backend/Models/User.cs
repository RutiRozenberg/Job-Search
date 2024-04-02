namespace Models
{
    public class User
    {
        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public Type Type { get; set; }
        public int CountOfCVsSent {get; set;}

    }


}
