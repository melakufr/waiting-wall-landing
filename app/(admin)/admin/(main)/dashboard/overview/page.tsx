import CardWrapper from '@/components/dashboard/cards';
import SubscriberChart from '@/components/dashboard/subscriber-chart';
import LatestInvestors from '@/components/dashboard/LatestInvestors';

import { Suspense } from 'react';
import {
  SubscriberChartSkeleton,
  LatestInvestorsSkeleton,
  CardsSkeleton,
} from '@/components/skeletons';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
};

export default async function Page() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<SubscriberChartSkeleton />}>
          <SubscriberChart />
        </Suspense>
        <Suspense fallback={<LatestInvestorsSkeleton />}>
          <LatestInvestors />
        </Suspense>
      </div>
    </main>
  );
}
