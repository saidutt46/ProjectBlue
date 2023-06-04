using System;
namespace Persistence.DtoModel
{
    public class UserProfileDto
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public DateTime DateJoined { get; set; }
    }

}

