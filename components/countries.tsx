import React from "react";
import CountriesCards from "./countries-cards";

export default function Countries() {
  return (
    <article className="mx-auto mt-10 grid w-fit grid-flow-row grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
      <CountriesCards />
      <CountriesCards />
      <CountriesCards />
      <CountriesCards />
    </article>
  );
}
