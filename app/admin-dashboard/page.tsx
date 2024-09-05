import NewLogTable from "@/components/NewLogForm";
import ReturnTable from "@/components/ReturnTable";
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <ReturnTable />
      <NewLogTable />
      <div className="my-10 mx-5">
        <Link href="/">Go back to Login Page</Link>
      </div>
    </div>
  );
};

export default Page;
