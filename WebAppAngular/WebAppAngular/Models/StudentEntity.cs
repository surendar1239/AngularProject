using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppAngular.Models
{
    public class StudentEntity
    { 
        public int serialno { get; set; }
        public int studentid { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string gender { get; set; }
        public string email { get; set; }
        public string pass { get; set; }
    }
}
