"use client";

import React, { useEffect, useState } from "react";

function SubscribersList() {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/waitlist");
      const { data } = await response.json();
      setSubscribers(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Subscribers List ({subscribers.length})</h1>
      <ul>
        {subscribers.map((sub: any, index: number) => (
          <li key={sub.id}>
            {index + 1}. {sub.email} -{" "}
            {new Date(sub.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </li>
        ))}
      </ul>
    </>
  );
}

export default SubscribersList;
