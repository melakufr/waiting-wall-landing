
import prisma, {
 
} from "@/lib/prisma";



export async function getUser(identifier: { id?: string; email?: string }) {
  const { id, email } = identifier;

  if (!id && !email) {
    throw new Error("Either id or email must be provided.");
  }

  try {
    const whereClause = id ? { id } : { email: email as string };

    const customer = await prisma.user.findUnique({
      where: whereClause,
    });

    if (!customer) {
      throw new Error(
        `Customer not found with ${id ? `ID ${id}` : `email ${email}`}.`
      );
    }

    return customer;
  } catch (error) {
    console.error("Error fetching customer:", error);
    throw new Error("Unable to fetch customer.");
  }
}






// Dashboard overview data
export async function fetchDashboardData() {
  try {
    const [
      totalSubscribers,
      totalUsers,
      totalInvestors,
      pendingVerifications,
      totalRevenueData
    ] = await Promise.all([
      prisma.subscribers.count(),
      prisma.user.count(),
      prisma.investor.count(),
      prisma.user.count({
        where: {
          emailVerified: null
        }
      }),
      prisma.investor.aggregate({
        _sum: {
          ticketSize: true
        }
      })
    ]);

    const averageTicketSize = await prisma.investor.aggregate({
      _avg: {
        ticketSize: true
      }
    });

    return {
      totalSubscribers,
      totalUsers,
      totalInvestors,
      averageTicketSize: averageTicketSize._avg.ticketSize || 0,
      pendingVerifications,
      totalRevenue: totalRevenueData._sum.ticketSize || 0
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch dashboard data.');
  }
}

// Latest investors data
export async function fetchLatestInvestors() {
  try {
    const investors = await prisma.investor.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        location: true,
        ticketSize: true,
        createdAt: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 5
    });

    return investors;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch latest investors.');
  }
}

// Subscriber growth data (last 12 months)
export async function fetchSubscriberGrowth() {
  try {
    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

    const subscribersByMonth = await prisma.subscribers.groupBy({
      by: ['createdAt'],
      where: {
        createdAt: {
          gte: twelveMonthsAgo
        }
      },
      _count: {
        id: true
      }
    });

    // Format data for chart (you might need to adjust this based on your exact needs)
    const monthlyData = Array.from({ length: 12 }, (_, i) => {
      const month = new Date();
      month.setMonth(month.getMonth() - (11 - i));
      const monthKey = month.toLocaleString('default', { month: 'short' });
      
      const monthSubscribers = subscribersByMonth.filter(sub => {
        const subMonth = new Date(sub.createdAt).getMonth();
        const subYear = new Date(sub.createdAt).getFullYear();
        return subMonth === month.getMonth() && subYear === month.getFullYear();
      });

      const total = monthSubscribers.reduce((sum, item) => sum + item._count.id, 0);

      return {
        month: monthKey,
        subscribers: total
      };
    });

    return monthlyData;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch subscriber growth data.');
  }
}

// Card data (similar to original but adapted for your models)
export async function fetchCardData() {
  try {
    const [
      numberOfSubscribers,
      numberOfUsers,
      totalInvestorsValue,
      pendingVerificationsCount
    ] = await Promise.all([
      prisma.subscribers.count(),
      prisma.user.count(),
      prisma.investor.aggregate({
        _sum: {
          ticketSize: true
        }
      }),
      prisma.user.count({
        where: {
          emailVerified: null
        }
      })
    ]);

    return {
      numberOfInvoices: numberOfSubscribers, // Using subscribers as equivalent
      numberOfCustomers: numberOfUsers,      // Using users as equivalent
      totalPaidInvoices: totalInvestorsValue._sum.ticketSize || 0,
      totalPendingInvoices: pendingVerificationsCount
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

// Additional service functions you might need:

// Get all subscribers
export async function fetchSubscribers() {
  try {
    const subscribers = await prisma.subscribers.findMany({
      select: {
        id: true,
        email: true,
        createdAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return subscribers;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch subscribers.');
  }
}

// Get all users
export async function fetchUsers() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        emailVerified: true,
        createdAt: true,
        updatedAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return users;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch users.');
  }
}

// Get all investors
export async function fetchInvestors() {
  try {
    const investors = await prisma.investor.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        location: true,
        ticketSize: true,
        createdAt: true,
        updatedAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return investors;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch investors.');
  }
}

// Get investor by ID
export async function fetchInvestorById(id: string) {
  try {
    const investor = await prisma.investor.findUnique({
      where: {
        id
      }
    });

    return investor;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch investor.');
  }
}

// Get user by ID
export async function fetchUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    });

    return user;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user.');
  }
}

// Get subscriber by email
export async function fetchSubscriberByEmail(email: string) {
  try {
    const subscriber = await prisma.subscribers.findUnique({
      where: {
        email
      }
    });

    return subscriber;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch subscriber.');
  }
}



export interface CreateInvestorData {
  name: string;
  email: string;
  location?: string;
  ticketSize: number;
}

export interface Investor {
  id: string;
  name: string;
  email: string;
  location: string | null;
  ticketSize: number;
  createdAt: Date;
  updatedAt: Date;
}

export async function createInvestor(data: CreateInvestorData): Promise<{
  success: boolean;
  investor?: Investor;
  error?: string;
}> {
  try {
    // Check if investor already exists
    const existingInvestor = await prisma.investor.findUnique({
      where: { email: data.email }
    });

    if (existingInvestor) {
      return {
        success: false,
        error: 'Investor with this email already exists'
      };
    }

    // Create new investor
    const investor = await prisma.investor.create({
      data: {
        name: data.name,
        email: data.email,
        location: data.location || null,
        ticketSize: data.ticketSize,
      }
    });

    return {
      success: true,
      investor: {
        id: investor.id,
        name: investor.name,
        email: investor.email,
        location: investor.location,
        ticketSize: investor.ticketSize,
        createdAt: investor.createdAt,
        updatedAt: investor.updatedAt
      }
    };

  } catch (error) {
    console.error('Error creating investor:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint failed')) {
        return {
          success: false,
          error: 'Investor with this email already exists'
        };
      }
    }

    return {
      success: false,
      error: 'Failed to create investor'
    };
  }
}

export async function getInvestorByEmail(email: string): Promise<Investor | null> {
  try {
    const investor = await prisma.investor.findUnique({
      where: { email }
    });

    return investor;
  } catch (error) {
    console.error('Error fetching investor:', error);
    return null;
  }
}

// export async function getInvestors(params?: {
//   page?: number;
//   limit?: number;
//   search?: string;
// }): Promise<{
//   investors: Investor[];
//   totalCount: number;
//   totalPages: number;
//   currentPage: number;
// }> {
//   try {
//     const page = params?.page || 1;
//     const limit = params?.limit || 10;
//     const skip = (page - 1) * limit;
//     const search = params?.search;

//     const where = search ? {
//       OR: [
//         { name: { contains: search, mode: 'insensitive' } },
//         { email: { contains: search, mode: 'insensitive' } },
//         { location: { contains: search, mode: 'insensitive' } },
//       ]
//     } : {};

//     const [investors, totalCount] = await Promise.all([
//       prisma.investor.findMany({
//         where,
//         skip,
//         take: limit,
//         orderBy: { createdAt: 'desc' },
//         select: {
//           id: true,
//           name: true,
//           email: true,
//           location: true,
//           ticketSize: true,
//           createdAt: true,
//           updatedAt: true,
//         }
//       }),
//       prisma.investor.count({ where })
//     ]);

//     return {
//       investors,
//       totalCount,
//       totalPages: Math.ceil(totalCount / limit),
//       currentPage: page
//     };

//   } catch (error) {
//     console.error('Error fetching investors:', error);
//     return {
//       investors: [],
//       totalCount: 0,
//       totalPages: 0,
//       currentPage: 1
//     };
//   }
// }

export async function updateInvestor(
  id: string, 
  data: Partial<CreateInvestorData>
): Promise<{
  success: boolean;
  investor?: Investor;
  error?: string;
}> {
  try {
    const investor = await prisma.investor.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.email && { email: data.email }),
        ...(data.location !== undefined && { location: data.location }),
        ...(data.ticketSize && { ticketSize: data.ticketSize }),
      }
    });

    return {
      success: true,
      investor: {
        id: investor.id,
        name: investor.name,
        email: investor.email,
        location: investor.location,
        ticketSize: investor.ticketSize,
        createdAt: investor.createdAt,
        updatedAt: investor.updatedAt
      }
    };

  } catch (error) {
    console.error('Error updating investor:', error);
    return {
      success: false,
      error: 'Failed to update investor'
    };
  }
}

export async function deleteInvestor(id: string): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    await prisma.investor.delete({
      where: { id }
    });

    return { success: true };

  } catch (error) {
    console.error('Error deleting investor:', error);
    return {
      success: false,
      error: 'Failed to delete investor'
    };
  }
}