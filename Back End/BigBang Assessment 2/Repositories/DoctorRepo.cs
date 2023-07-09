using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BigBang_Assessment_2.Models;
using Microsoft.EntityFrameworkCore;

namespace BigBang_Assessment_2.Repositories
{
    public class DoctorRepository : IDoctorRepository
    {
        private readonly BigBangContext _context;

        public DoctorRepository(BigBangContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Doctor>> GetAllDoctors()
        {
            return await _context.Doctors.ToListAsync();
        }

        public async Task<Doctor> GetDoctorById(int id)
        {
            return await _context.Doctors.FindAsync(id);
        }

        public async Task CreateDoctor(Doctor doctor)
        {
            _context.Doctors.Add(doctor);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateDoctor(Doctor doctor)
        {
            _context.Entry(doctor).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteDoctor(int id)
        {
            var doctor = await _context.Doctors.FindAsync(id);
            if (doctor != null)
            {
                _context.Doctors.Remove(doctor);
                await _context.SaveChangesAsync();
            }
        }
    }
}
