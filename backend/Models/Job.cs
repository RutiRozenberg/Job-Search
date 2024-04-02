using System.Runtime.InteropServices;

namespace Models
{
    public class Job
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Type Type { get; set; }
        public int Hours { get; set; }
        public Area WhichArea { get; set; }
        public string Requirements { get; set; }
        public bool WorkFromHome { get; set; }

    }


}
