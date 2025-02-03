"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function UserRequestsPage() {
  const userRequests = [
    {
      name: "John Doe",
      createdAt: "2021-10-10 10:00",
    },
    {
      name: "CryptoGallo",
      createdAt: "2021-10-10 10:00",
    },
    {
      name: "John Doe",
      createdAt: "2021-10-10 10:00",
    },
    {
      name: "CryptoGallo",
      createdAt: "2021-10-10 10:00",
    },
    {
      name: "John Doe",
      createdAt: "2021-10-10 10:00",
    },
    {
      name: "CryptoGallo",
      createdAt: "2021-10-10 10:00",
    },
  ];

  return (
    <div className="flex flex-col py-8 px-4 gap-[32px]">
      <h1 className="text-[28px] font-bold">User Requests</h1>
      <div className="flex flex-col w-full gap-[16px]">
        {userRequests.map((userRequest, index) => (
          <Card key={index} className="bg-[#e1e1e1] border-none">
            <CardHeader>
              <CardTitle>{userRequest.name}</CardTitle>
              <CardDescription>{userRequest.createdAt}</CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-row justify-between gap-[6px]">
              <Button
                variant="outline"
                className="bg-transparent rounded-full border-2 border-solid border-black w-1/2 text-[14px]"
              >
                Refuse
              </Button>
              <Button className="rounded-full w-1/2 text-[14px]">
                Approve
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* Desktop version */}
      <div className="hidden md:block">
        <div className="flex flex-row justify-end gap-[6px]">
          <Button
            variant="outline"
            className="w-[200px] py-[14px] bg-transparent rounded-full border-2 border-solid border-black text-[14px]"
          >
            Refuse all
          </Button>
          <Button className="w-[200px] py-[14px] rounded-full text-[14px]">
            Approve all
          </Button>
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <div className="flex flex-row justify-between gap-[6px] max-w-[1200px] mx-auto">
          <Button
            variant="outline"
            className="w-1/2 py-[14px] bg-transparent rounded-full border-2 border-solid border-black text-[14px]"
          >
            Refuse all
          </Button>
          <Button className="w-1/2 py-[14px] rounded-full text-[14px]">
            Approve all
          </Button>
        </div>
      </div>
    </div>
  );
}
