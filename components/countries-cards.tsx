import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CountriesCards() {
  return (
    <div className="dark:bg-zinc-950 rounded-md w-64 py-2 px-2 dark:hover:bg-zinc-900 duration-300 transition-all">
      <Link href="/">
        <h1>$country.name</h1>
        <p>
          Population: <span>$country.population</span>
        </p>
        <p>
          Region: <span>$country.Region</span>
        </p>
        <p>
          Capital: <span>$country.Capital</span>
        </p>
      </Link>
    </div>
  );
}
