﻿using System.ComponentModel.DataAnnotations;

namespace BigBang_Assessment_2.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? Role { get; set; }
        public string? PhoneNumber { get; set; }
        public string? ProfilePicture { get; set; }
        public string? Country { get; set; }
        public string? Address { get; set; }
        public string? Status { get; set; }
    }
}
