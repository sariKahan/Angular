using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class comment
    {
        public static int num { get; set; } = 1;
        public int id { get; set; } 
        public string name { get; set; }
        public string tel { get; set; }
        public string email { get; set; }
        public string yourComment { get; set; }
        public int like { get; set; }
    }
}