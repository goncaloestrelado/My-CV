"use client";

import { Layout } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <Link href="/" className="text-blue-500 hover:text-blue-700 underline text-lg">
          Return to Home
        </Link>
      </div>
    </Layout>
  );
}
