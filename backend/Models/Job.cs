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


        public Job(int id, string name, Type type, int hours, Area area, string require, bool fromHome)
        {
            Id = id;
            Name = name;
            Type = type;
            Hours = hours;
            WhichArea = area;
            Requirements = require;
            WorkFromHome = fromHome;
        }
    }


}
