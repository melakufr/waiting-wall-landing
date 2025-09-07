


import * as React from "react";
import { Users, Mail, Calendar, DollarSign, MapPin, CreditCard } from "lucide-react";


// Mock data fetch functions based on your Prisma models
async function fetchDashboardData() {
  // In a real app, you would fetch this data from your database
  return {
    totalSubscribers: 1240,
    totalUsers: 567,
    totalInvestors: 89,
    averageTicketSize: 25000,
    pendingVerifications: 23,
    totalRevenue: 1250000,
  };
}

// Icon mapping using Lucide React icons
const iconMap = {
  subscribers: Mail,
  users: Users,
  investors: Users, // Using Users icon for investors
  ticket: CreditCard,
  pending: Calendar,
  revenue: DollarSign,
};

export default async function DashboardCards() {
  const {
    totalSubscribers,
    totalUsers,
    totalInvestors,
    averageTicketSize,
    pendingVerifications,
    totalRevenue,
  } = await fetchDashboardData();

  return (
    <>
      <Card title="Total Subscribers" value={totalSubscribers} type="subscribers" />
      <Card title="Total Users" value={totalUsers} type="users" />
      <Card title="Total Investors" value={totalInvestors} type="investors" />
      <Card title="Avg Ticket Size" value={`$${averageTicketSize.toLocaleString()}`} type="ticket" />
      <Card title="Pending Verifications" value={pendingVerifications} type="pending" />
      <Card title="Total Revenue" value={`$${totalRevenue.toLocaleString()}`} type="revenue" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'subscribers' | 'users' | 'investors' | 'ticket' | 'pending' | 'revenue';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}

