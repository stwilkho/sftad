import React from "react";
import Link from "next/link";

const driversPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-yellow-500 m-5">Monitor</h1>
      <div className="my-10 mx-5">
        <Link href="/">Go back to Login Page</Link>
      </div>
    </div>
  );
};

export default driversPage;
