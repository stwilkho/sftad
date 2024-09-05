import Link from "next/link";
import React from "react";

const skipperSubPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-black m-5">Thank You Skipper !</h1>
      <div className="my-10 mx-5">
        <Link href="/admin-dashboard">Admin Dashboard</Link>
      </div>
    </div>
  );
};

export default skipperSubPage;
