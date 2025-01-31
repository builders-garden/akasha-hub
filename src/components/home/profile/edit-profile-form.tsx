"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface EditProfileFormProps {
  profile: {
    avatar?: string;
    name: string;
    lastname: string;
    email: string;
    username: string;
    identities: {
      provider: string;
      address: string;
    }[];
  };
}

const formSchema = z.object({
  avatar: z.string().optional(),
  name: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  username: z
    .string()
    .min(3, {
      message: "Username must be at least 3 characters long",
    })
    .max(50, {
      message: "Username must be at most 50 characters long",
    }),
});

export function EditProfileForm({ profile }: EditProfileFormProps) {
  // defined the form with the schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      avatar: profile.avatar,
      name: profile.name,
      lastname: profile.lastname,
      email: profile.email,
      username: profile.username,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // values here are type-safe and validated
    console.log(values);
  }

  return (
    <div className="flex flex-col">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[20px]">
          <FormField
            control={form.control}
            name="avatar"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-[8px]">
                <FormLabel className="font-bold">Avatar</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-4">
                    {field.value ? (
                      <Image
                        src={field.value}
                        alt="Profile avatar"
                        className="h-[87px] w-[87px] rounded-full object-cover"
                        width={87}
                        height={87}
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`https://ui-avatars.com/api/?name=${profile.name}+${profile.lastname}`}
                        alt="Profile avatar"
                        className="h-[87px] w-[87px] rounded-full object-cover"
                      />
                    )}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        // TODO: Add image upload logic here
                        console.log("Upload image clicked");
                      }}
                      className="rounded-full"
                    >
                      Change Image
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-[8px]">
                <FormLabel className="font-bold">Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-[8px]">
                <FormLabel className="font-bold">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-[8px]">
                <FormLabel className="font-bold">Email</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-[8px]">
                <FormLabel className="font-bold">Username</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="fixed bottom-[18px] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md text-md rounded-full"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
