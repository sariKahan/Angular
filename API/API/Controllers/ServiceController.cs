using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ServiceController : ApiController
    {
        // GET: api/Service
        public IHttpActionResult Get()
        {
            return Ok(DB.services);
        }

        // GET: api/Service/5
        public IHttpActionResult Get(int id)
        {
            Service service= DB.services.Find(i => i.Id == id);
            if (service == null)
                return BadRequest("id not found");
            return Ok(service);
        }

        // POST: api/Service
        public IHttpActionResult Post([FromBody]Service service)
        {
            DB.services.Add(service);
            return Ok(DB.services);
        }

        // PUT: api/Service/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Service/5
        public void Delete(int id)
        {
        }
    }
}
