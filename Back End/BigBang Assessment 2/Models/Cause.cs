using System.ComponentModel.DataAnnotations;

namespace BigBang_Assessment_2.Models
{
    public class Cause
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; }
        public int? Age { get; set; }
        public string? Diagnosis { get; set; }

    }
}
