"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps): React.ReactElement {
  const router = useRouter();

  return (
    <div className="flex flex-row items-center my-2 gap-2">
      <button
        onClick={() => router.back()}
        className="bg-transparent p-2 rounded-full"
      >
        <FaArrowLeft size={24} />
      </button>
      <h1 className="text-[28px] font-bold">{title}</h1>
    </div>
  );
}
