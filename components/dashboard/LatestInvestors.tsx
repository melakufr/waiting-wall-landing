



import clsx from 'clsx';
import { MapPin, DollarSign, Calendar } from 'lucide-react';

// Mock data fetch function for latest investors
async function fetchLatestInvestors() {
  // In a real app, you would fetch this data from your database
  return [
    {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@example.com',
      location: 'New York, USA',
      ticketSize: 50000,
      createdAt: new Date('2024-01-15'),
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      location: 'London, UK',
      ticketSize: 75000,
      createdAt: new Date('2024-01-14'),
    },
    {
      id: '3',
      name: 'Michael Chen',
      email: 'michael.chen@example.com',
      location: 'Singapore',
      ticketSize: 35000,
      createdAt: new Date('2024-01-13'),
    },
    {
      id: '4',
      name: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      location: 'San Francisco, USA',
      ticketSize: 100000,
      createdAt: new Date('2024-01-12'),
    },
    {
      id: '5',
      name: 'David Kim',
      email: 'david.kim@example.com',
      location: 'Seoul, South Korea',
      ticketSize: 45000,
      createdAt: new Date('2024-01-11'),
    },
  ];
}

export default async function LatestInvestors() {
  const latestInvestors = await fetchLatestInvestors();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`mb-4 text-xl md:text-2xl`}>
        Latest Investors
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {latestInvestors.map((investor, i) => {
            return (
              <div
                key={investor.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                    <DollarSign className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {investor.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {investor.email}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <p className={`truncate text-sm font-medium md:text-base`}>
                    ${investor.ticketSize.toLocaleString()}
                  </p>
                  {investor.location && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin className="h-3 w-3" />
                      <span>{investor.location}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <Calendar className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}