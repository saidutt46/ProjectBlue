using System;
using Persistence.DtoModel;

namespace Persistence.Responses
{
    public class LoginResponse
    {
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
        public UserProfileDto UserProfile { get; set; }
    }
}