import Link from "next/link";
import React from "react";

const vesselPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-amber-700 m-5">Vessel</h1>
      <div className="my-10 mx-5">
        <Link href="/admin-dashboard">Admin Dashboard</Link>
      </div>
    </div>
  );
};

export default vesselPage;
