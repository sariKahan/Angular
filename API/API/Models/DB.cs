using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Xml.Linq;

namespace API.Models
{
    public class DB
    {

       public static List<Service> services = new List<Service>() 
        {
            new Service(){Id=1, Name="c#", Description="work with database", Cost=100, ExperienceYear=3, AverageWorkingHours=7},
            new Service(){Id=2,Name="java",Description="work with algoritmim",Cost=850,ExperienceYear=5,AverageWorkingHours=10},
            new Service(){Id=3,Name= "angular",Description="work with api",Cost=300,ExperienceYear=4,AverageWorkingHours= 5}
        };
        public static List<comment> comments = new List<comment>()
        {
            new comment(){id=comment.num++, name="noa",tel="123456789",email="noa@.com",yourComment="שירות אמין",like=0 },
            new comment(){id=comment.num++,name="sari",tel="123456789",email="noa@.com",yourComment="יעיל ומהיר",like=0 }
        };
    }
}