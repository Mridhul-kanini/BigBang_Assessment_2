using System.Collections.Generic;
using System.Threading.Tasks;
using BigBang_Assessment_2.Models;

namespace BigBang_Assessment_2.Repositories
{
    public interface IPatientRepository
    {
        Task<IEnumerable<Patient>> GetAllPatients();
        Task<Patient> GetPatientById(int id);
        Task CreatePatient(Patient patient);
        Task UpdatePatient(Patient patient);
        Task DeletePatient(int id);
    }
}
