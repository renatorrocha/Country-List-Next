import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CountriesCards() {
  return (
    <div className="h-max w-max rounded-md border border-zinc-200 shadow-md transition-all duration-300 hover:scale-105 hover:bg-zinc-200 dark:border-zinc-950 dark:bg-zinc-950 dark:hover:bg-zinc-900">
      <Link href="/" className=" flex flex-col items-center justify-center ">
        <Image
          src={"/desktop-design-home-dark.jpg"}
          alt=""
          width={300}
          height={300}
          className="rounded-t-md"
        />
        <section className="flex flex-col gap-2 pb-6 pt-4">
          <h1 className="font-bold">$country.name</h1>
          <section className="flex flex-col gap-1">
            <p className="font-semibold">
              Population:{" "}
              <span className="font-normal">$country.population</span>
            </p>
            <p className="font-semibold">
              Region: <span className="font-normal">$country.Region</span>
            </p>
            <p className="font-semibold">
              Capital: <span className="font-normal">$country.Capital</span>
            </p>
          </section>
        </section>
      </Link>
    </div>
  );
}
