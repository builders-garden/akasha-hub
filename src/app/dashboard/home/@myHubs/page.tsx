import * as React from "react";
import Link from "next/link";
import { Routes } from "@/constants/routes";

export default async function MyHubsPage(): Promise<React.JSX.Element> {
  return (
    <section className="rounded-xl bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Your hubs</h2>
        <Link href={Routes.MyHubs} className="text-blue-600 hover:underline">
          see all
        </Link>
      </div>
      <div className="h-64 rounded-lg bg-gray-200">
        {/* Placeholder for hub content */}
      </div>
    </section>
  );
}
