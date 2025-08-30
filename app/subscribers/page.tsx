import { getSubscribersAction } from "@/lib/actions";
import React from "react";

// Disable caching entirely
export const dynamic = "force-dynamic";
export const revalidate = 0;

async function Subscribers() {
  const res = await getSubscribersAction();
  console.log("Fetched subscribers:", res);
  return (
    <>
      <h1>Subscribers List ({res.data?.length})</h1><br/>
      <ul>
        {res.data?.map((subscriber, index) => (
          <li key={subscriber.id}>
            {index + 1} - {subscriber.email} = {subscriber.createdAt.toDateString()}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Subscribers;
