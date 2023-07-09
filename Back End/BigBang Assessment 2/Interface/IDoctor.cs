using System.Collections.Generic;
using System.Threading.Tasks;
using BigBang_Assessment_2.Models;

namespace BigBang_Assessment_2.Repositories
{
    public interface IDoctorRepository
    {
        Task<IEnumerable<Doctor>> GetAllDoctors();
        Task<Doctor> GetDoctorById(int id);
        Task CreateDoctor(Doctor doctor);
        Task UpdateDoctor(Doctor doctor);
        Task DeleteDoctor(int id);
    }
}
