using System.Collections.Generic;
using TNGL.Models;
using Microsoft.EntityFrameworkCore;

namespace TNGL.DataAccess
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Customer> Customers { get; set; }
    }
}
