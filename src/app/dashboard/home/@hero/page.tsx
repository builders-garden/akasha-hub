import * as React from "react";

export default async function HeroPage(): Promise<React.JSX.Element> {
  return (
    <section>
      <div className="flex flex-col gap-2 bg-slate-400 py-10 px-8 w-full">
        <h1 className="text-5xl font-semibold text-white">Welcome</h1>
      </div>
    </section>
  );
}
