using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoToday.Model
{
    public class Event
    {
        public int Id { get; set; }
        public DateTime EventDate { get; set; }
        public string Venue { get; set; }
    }
}
