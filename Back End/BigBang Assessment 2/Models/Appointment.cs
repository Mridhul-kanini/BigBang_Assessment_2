using System.ComponentModel.DataAnnotations;

namespace BigBang_Assessment_2.Models
{
    public class Appointment
    {
        [Key]
        public int Id { get; set; }
        public string? PatientName { get; set; }
        public string? Diagnosis { get; set; }

        public Doctor? Doctor { get; set; }
    }
}
