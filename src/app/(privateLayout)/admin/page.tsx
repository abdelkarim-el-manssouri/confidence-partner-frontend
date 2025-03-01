"use client";
import ECommerce from "@/components/Dashboard/E-commerce";
// import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";

// export const metadata: Metadata = {
//   title:
//     "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
//   description: "This is Next.js Home for TailAdmin Dashboard Template",
// };

export default function Home() {
    const [loading, setLoading] = useState<boolean>(true);
  
    // const pathname = usePathname();
  
    useEffect(() => {
      setTimeout(() => setLoading(false), 1000);
    }, []);
  return (
    <>
    {loading ? <Loader /> : 
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
      }
    </>
  );
}
