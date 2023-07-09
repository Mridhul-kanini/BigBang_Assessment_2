using Microsoft.EntityFrameworkCore;
using System.Data;

namespace BigBang_Assessment_2.Models
{
    public class BigBangContext : DbContext
    {
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Cause> Causes { get; set; }
        public DbSet<Appointment> Appointments { get; set; }

        public BigBangContext(DbContextOptions<BigBangContext> options) : base(options)
        {

        }
    }
}
