"use client";

import { useSearchParams } from "next/navigation";
import Home from "@/components/Home";
import { Suspense } from "react";

const Page = () => {
  const searchParams = useSearchParams();

  const destroyed = searchParams.get("destroyed");
  const error = searchParams.get("error");

  return (
    <Suspense>
      <Home wasDestroyed={destroyed === "true"} error={error} />
    </Suspense>
  );
};

export default Page;
