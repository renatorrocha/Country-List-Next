import { getAllCountries } from "@/app/actions";
import CountriesCards from "./countries-cards";
import { ICountry } from "@/types/country";

export default async function ListAllCountries() {
  const data = await getAllCountries();

  return (
    <article className="mx-auto mt-10 grid grid-flow-row grid-cols-1 justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
      {data.map((country: ICountry) => (
        <CountriesCards key={country.name.common} country={country} />
      ))}
    </article>
  );
}
