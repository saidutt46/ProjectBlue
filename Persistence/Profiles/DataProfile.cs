using System;
using AutoMapper;
using Persistence.DtoModel;
using Persistence.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Persistence.Profiles
{
    public class DataProfile : Profile
    {
        public DataProfile()
        {
            CreateMap<ApplicationUser, UserProfileDto>();
        }
    }
}

