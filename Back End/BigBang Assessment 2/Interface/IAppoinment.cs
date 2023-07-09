using System.Collections.Generic;
using System.Threading.Tasks;
using BigBang_Assessment_2.Models;

namespace BigBang_Assessment_2.Repositories
{
    public interface IAppointmentRepository
    {
        Task<IEnumerable<Appointment>> GetAllAppointments();
        Task<Appointment> GetAppointmentById(int id);
        Task CreateAppointment(Appointment appointment);
        Task UpdateAppointment(Appointment appointment);
        Task DeleteAppointment(int id);
    }
}
