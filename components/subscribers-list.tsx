"use client";

import { signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";

function SubscribersList() {
  const [subscribers, setSubscribers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/waitlist");
      const { data } = await response.json();
      setSubscribers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 flex flex-col">
      {/* Top bar */}
      <header className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
        <button
          onClick={(event) => {
            event.preventDefault();
            signOut({ callbackUrl: "/admin/auth/login" });
          }}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Sign Out
        </button>
      </header>

      {/* Content */}
      <main className="flex-grow flex justify-center p-6">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Subscribers List{" "}
            <span className="text-indigo-600">({subscribers.length})</span>
          </h2>

          {subscribers.length === 0 ? (
            <p className="text-gray-500 text-center">
              No subscribers yet.
            </p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {subscribers.map((sub: any, index: number) => (
                <li
                  key={sub.id}
                  className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-500">
                      {index + 1}.
                    </span>
                    <span className="text-gray-800 font-medium">
                      {sub.email}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(sub.createdAt).toLocaleDateString("en-US", {
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
      </main>
    </div>
  );
}

export default SubscribersList;
