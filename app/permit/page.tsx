import Link from "next/link";
import React from "react";

const companyPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-pink-600 m-5">Permit</h1>
      <div className="my-10 mx-5">
        <Link href="/admin-dashboard">Admin Dashboard</Link>
      </div>
    </div>
  );
};

export default companyPage;
