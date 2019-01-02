using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAppAngular.Models;

namespace WebAppAngular.Controllers
{
    [Route("api/student")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private MyDBContext db = new MyDBContext();

        [Produces("application/json")]
        [HttpGet("findall")]

        public async Task<IActionResult> findAll()
        {
            try
            {
                var student = db.Students.Select(p => new StudentEntity()
                {
                    serialno = p.SerialNo,
                    studentid = p.StudentId,
                    firstName = p.FirstName,
                    lastName = p.LastName,
                    gender = p.Gender,
                    email = p.Email,
                    pass = p.Password
                }).ToList();
                return Ok(student);
            }
            catch
            {
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("find/{studentid}")]

        public async Task<IActionResult> find(int studentid)
        { 
            try
            {
                var student1 = db.Students.Where(P => P.StudentId == studentid).Select(p => new StudentEntity()
                {
                    serialno = p.SerialNo,
                    studentid = p.StudentId,
                    firstName = p.FirstName,
                    lastName = p.LastName,
                    gender = p.Gender,
                    email = p.Email,
                    pass = p.Password
                }).SingleOrDefault();
                return Ok(student1);
            }
            catch
            {
                return BadRequest();
            }
        }

        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPost("create")]

        public async Task<IActionResult> Create([FromBody] StudentEntity studentEntity)
        {
            try
            {
                var student2 = new Student()
                {
                    StudentId = studentEntity.studentid,
                    FirstName = studentEntity.firstName,
                    LastName = studentEntity.lastName,
                    Email = studentEntity.email,
                    Gender = studentEntity.gender,
                    Password = studentEntity.pass
                };
                db.Students.Add(student2);
                db.SaveChanges();
                return Ok(student2);
            }
            catch
            {
                return BadRequest();
            }
        }

        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPut("update")]

        public async Task<IActionResult> Update([FromBody] StudentEntity studentEntity)
        {
            try
            {
                var student3 = db.Students.Find(studentEntity.studentid);
                {
                    student3.StudentId = studentEntity.studentid;
                    student3.FirstName = studentEntity.firstName;
                    student3.LastName = studentEntity.lastName;
                    student3.Gender = studentEntity.gender;
                    student3.Email = studentEntity.email;
                    student3.Password = studentEntity.pass;
                }
                db.Students.Add(student3);
                 db.SaveChanges();
                return Ok(student3);
            } catch
            {
                return BadRequest();
            }
        }

        [HttpDelete("delete/{studentid}")]

        public async Task<IActionResult> delete(int studentid)
        {
            try
            {
                var customer4 = db.Students.Find(studentid);
                db.Students.Remove(customer4);
                db.SaveChanges();
                return Ok(customer4);


            }
            catch
            {
                return BadRequest();

            }
        }
    }


}
/*      
       
        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPut("update")]

        public async Task<IActionResult>  Update([FromBody] CustomerEntity customerEntity)
        {
            try
            {
                var customer3 = db.Customers.Find(customerEntity.id);
                {
                    customer3.Id = customerEntity.id;
                    customer3.Name = customerEntity.name;
                    customer3.Email = customerEntity.email;
                    customer3.Address = customerEntity.address;
                    customer3.City = customerEntity.city;
                    customer3.PHno = customerEntity.phno;

                };
                 db.Customers.Add(customer3);
                 db.SaveChanges();
                    return Ok(customer3);
                
            }  catch
            {
                return BadRequest();
            }
        }
        
        [HttpDelete("delete/{id}")]

        public async Task<IActionResult> delete(int id)
        {
            try
            {
                var customer4 = db.Customers.Find(id);
                db.Customers.Remove(customer4);
                db.SaveChanges();
                return Ok(customer4);


            } catch
            {
                return BadRequest();
                
            }
        } 

        
    }
 */
