import React from "react";
import CountriesCards from "./countries-cards";
import { ICountry } from "@/types/country";

export default function ListAllCountries({data}) {
  return (
    <article className="mx-auto mt-10 grid grid-flow-row grid-cols-1 justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
      {data.map((country: ICountry) => (
        <CountriesCards key={country.name.common} country={country} />
      ))}
    </article>
  );
}
