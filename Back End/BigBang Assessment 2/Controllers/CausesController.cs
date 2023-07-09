using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BigBang_Assessment_2.Models;
using BigBang_Assessment_2.Repositories;

namespace BigBang_Assessment_2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CausesController : ControllerBase
    {
        private readonly ICauseRepository _causeRepository;

        public CausesController(ICauseRepository causeRepository)
        {
            _causeRepository = causeRepository;
        }

        // GET: api/Causes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cause>>> GetCauses()
        {
            var causes = await _causeRepository.GetAllCauses();
            return Ok(causes);
        }

        // GET: api/Causes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cause>> GetCause(int id)
        {
            var cause = await _causeRepository.GetCauseById(id);

            if (cause == null)
            {
                return NotFound();
            }

            return Ok(cause);
        }

        // POST: api/Causes
        [HttpPost]
        public async Task<ActionResult<Cause>> CreateCause(Cause cause)
        {
            await _causeRepository.CreateCause(cause);
            return CreatedAtAction("GetCause", new { id = cause.Id }, cause);
        }

        // PUT: api/Causes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCause(int id, Cause cause)
        {
            if (id != cause.Id)
            {
                return BadRequest();
            }

            await _causeRepository.UpdateCause(cause);
            return NoContent();
        }

        // DELETE: api/Causes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCause(int id)
        {
            await _causeRepository.DeleteCause(id);
            return NoContent();
        }
    }
}
