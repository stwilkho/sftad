import React from "react";
import Link from "next/link";

const workersPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-blue-700 m-5">Skipper</h1>
      <div className="my-10 mx-5">
        <Link href="/">Go back to Login Page</Link>
      </div>
    </div>
  );
};

export default workersPage;
