using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Persistence.Models
{
	public class ApplicationUser : IdentityUser
	{
        public DateTime DateJoined { get; set; }
    }
}

