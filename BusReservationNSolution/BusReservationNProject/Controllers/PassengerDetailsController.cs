using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using BusReservationNProject;

namespace BusReservationNProject.Controllers
{
    public class PassengerDetailsController : ApiController
    {
        private BusReservationEntities db = new BusReservationEntities();
        [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
        // GET: api/PassengerDetails
        public IQueryable<PassengerDetail> GetPassengerDetails()
        {
            return db.PassengerDetails;
        }

        // GET: api/PassengerDetails/5
        [ResponseType(typeof(PassengerDetail))]
        public IHttpActionResult GetPassengerDetail(int id)
        {
            PassengerDetail passengerDetail = db.PassengerDetails.Find(id);
            if (passengerDetail == null)
            {
                return NotFound();
            }

            return Ok(passengerDetail);
        }

        // PUT: api/PassengerDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPassengerDetail(int id, PassengerDetail passengerDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != passengerDetail.PNR)
            {
                return BadRequest();
            }

            db.Entry(passengerDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassengerDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/PassengerDetails
        [ResponseType(typeof(PassengerDetail))]
        public IHttpActionResult PostPassengerDetail(PassengerDetail passengerDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PassengerDetails.Add(passengerDetail);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (PassengerDetailExists(passengerDetail.PNR))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = passengerDetail.PNR }, passengerDetail);
        }

        // DELETE: api/PassengerDetails/5
        [ResponseType(typeof(PassengerDetail))]
        public IHttpActionResult DeletePassengerDetail(int id)
        {
            PassengerDetail passengerDetail = db.PassengerDetails.Find(id);
            if (passengerDetail == null)
            {
                return NotFound();
            }

            db.PassengerDetails.Remove(passengerDetail);
            db.SaveChanges();

            return Ok(passengerDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PassengerDetailExists(int id)
        {
            return db.PassengerDetails.Count(e => e.PNR == id) > 0;
        }
    }
}