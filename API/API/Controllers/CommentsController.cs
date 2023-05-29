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
    public class CommentsController : ApiController
    {
        // GET: api/Comments
        public IHttpActionResult Get()
        {
            return Ok(DB.comments);
        }

        // GET: api/Comments/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Comments
        public IHttpActionResult Post([FromBody] comment comment)
        {
            comment.id = comment.num++;
            DB.comments.Add(comment);
            return Ok(DB.comments);
        }

        // PUT: api/Comments/5
        public IHttpActionResult Put(int id)
        {
            if (!(id > comment.num - 1))
                DB.comments.Find(x => x.id == id).like++ ;
            return Ok(DB.comments);


        }

        // DELETE: api/Comments/5
        public void Delete(int id)
        {
        }
    }
}
