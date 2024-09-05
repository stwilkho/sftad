import Link from "next/link";
import React from "react";

const factoryPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-purple-700 m-5">Factory</h1>
      <div className="my-10 mx-5">
        <Link href="/admin-dashboard">Admin Dashboard</Link>
      </div>
    </div>
  );
};

export default factoryPage;
