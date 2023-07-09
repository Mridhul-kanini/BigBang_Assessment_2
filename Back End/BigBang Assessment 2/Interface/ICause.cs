using System.Collections.Generic;
using System.Threading.Tasks;
using BigBang_Assessment_2.Models;

namespace BigBang_Assessment_2.Repositories
{
    public interface ICauseRepository
    {
        Task<IEnumerable<Cause>> GetAllCauses();
        Task<Cause> GetCauseById(int id);
        Task CreateCause(Cause cause);
        Task UpdateCause(Cause cause);
        Task DeleteCause(int id);
    }
}
