import Home from "@/components/Home";
import { Suspense } from "react";

const Page = ({
  searchParams,
}: {
  searchParams: { destroyed?: string; error?: string };
}) => {
  return (
    <Suspense>
      <Home searchParams={searchParams} />
    </Suspense>
  );
};

export default Page;
