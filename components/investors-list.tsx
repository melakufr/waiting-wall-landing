"use client";

import React, { useEffect, useState } from "react";

function InvestorsList() {
  const [investors, setInvestors] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/investors");
      const { data } = await response.json();
      setInvestors(data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex justify-center p-1">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Investors List{" "}
          <span className="text-emerald-600">({investors.length})</span>
        </h1>

        {investors.length === 0 ? (
          <p className="text-gray-500 text-center">No investors yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {investors.map((inv: any, index: number) => (
              <li
                key={inv.id}
                className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-500">
                    {index + 1}.
                  </span>
                  <span className="text-gray-800 font-medium">{inv.email}</span>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(inv.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default InvestorsList;
