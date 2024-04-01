using Microsoft.Extensions.DependencyInjection;
using Interfaces;
using Services;

namespace Utilities{

    public static  class Utilities{
        public static void AddJob(this IServiceCollection services)
        {
            services.AddSingleton<IJobInterface,JobService>();
        }

        public static void AddUser(this IServiceCollection services)
        {
            services.AddSingleton<IUserInterface,UserService>();
        }
    }
}
