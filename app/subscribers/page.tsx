import SubscribersList from "@/components/subscribers-list";
import InvestorsList from "@/components/investors-list";

function Subscribers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subscribers */}
        <SubscribersList />

        {/* Investors */}
        <InvestorsList />
      </div>
    </div>
  );
}

export default Subscribers;
