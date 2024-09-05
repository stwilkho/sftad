import Link from "next/link";
import React from "react";

const adminPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-blue-600 m-5">Admin Page</h1>
      <div className="my-10 mx-5">
        <Link href="/admin-dashboard">Admin Dashboard</Link>
      </div>
    </div>
  );
};

export default adminPage;
