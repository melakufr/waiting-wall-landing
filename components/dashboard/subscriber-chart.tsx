
import { Calendar } from 'lucide-react';
import BarChart from '@/components/dashboard/bar-chart';

// Mock data fetch function for subscriber growth
async function fetchSubscriberGrowth() {
  // In a real app, you would fetch this data from your database
  return [
    { month: 'Jan', subscribers: 120 },
    { month: 'Feb', subscribers: 180 },
    { month: 'Mar', subscribers: 150 },
    { month: 'Apr', subscribers: 200 },
    { month: 'May', subscribers: 250 },
    { month: 'Jun', subscribers: 300 },
    { month: 'Jul', subscribers: 350 },
    { month: 'Aug', subscribers: 400 },
    { month: 'Sep', subscribers: 450 },
    { month: 'Oct', subscribers: 500 },
    { month: 'Nov', subscribers: 550 },
    { month: 'Dec', subscribers: 600 },
  ];
}

export default async function SubscriberChart() {
  const subscriberData = await fetchSubscriberGrowth();

  return (
    <div className="w-full md:col-span-4">
      <h2 className={` mb-4 text-xl md:text-2xl`}>
        Subscriber Growth
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <BarChart
          data={subscriberData}
          xAxisKey="month"
          dataKey="subscribers"
          xAxisLabel="Month"
          yAxisLabel="Subscribers"
          color="#3b82f6"
          height={300}
        />
        <div className="flex items-center pb-2 pt-6">
          <Calendar className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}