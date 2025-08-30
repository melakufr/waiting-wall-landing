import { getSubscribersAction } from "@/lib/actions";
import React from "react";

async function Subscribers() {
  const res = await getSubscribersAction();
  console.log(res);
  return (
    <>
      <h1>Subscribers List ({res.data?.length})</h1><br/>
      <ul>
        {res.data?.map((subscriber,index) => (
          <li key={subscriber.id}>{index + 1} - {subscriber.email} = {subscriber.createdAt.toDateString()}</li>
        ))}
      </ul>
    </>
  );
}

export default Subscribers;
