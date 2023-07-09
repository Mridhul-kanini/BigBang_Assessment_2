using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BigBang_Assessment_2.Models;
using Microsoft.EntityFrameworkCore;

namespace BigBang_Assessment_2.Repositories
{
    public class CauseRepository : ICauseRepository
    {
        private readonly BigBangContext _context;

        public CauseRepository(BigBangContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Cause>> GetAllCauses()
        {
            return await _context.Causes.ToListAsync();
        }

        public async Task<Cause> GetCauseById(int id)
        {
            return await _context.Causes.FindAsync(id);
        }

        public async Task CreateCause(Cause cause)
        {
            _context.Causes.Add(cause);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateCause(Cause cause)
        {
            _context.Entry(cause).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteCause(int id)
        {
            var cause = await _context.Causes.FindAsync(id);
            if (cause != null)
            {
                _context.Causes.Remove(cause);
                await _context.SaveChangesAsync();
            }
        }
    }
}
