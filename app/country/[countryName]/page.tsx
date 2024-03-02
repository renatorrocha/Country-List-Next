import {
  getAllCountries,
  getCountryBorders,
  getCountryByName,
} from "@/app/actions";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { ICountry } from "@/types/country";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface ICountryPage {
  params: { countryName: string };
}

export default async function page({ params: { countryName } }: ICountryPage) {
  const countries: ICountry[] = await getCountryByName(countryName);
  const country = countries.find(
    (country: ICountry) =>
      country.name.common == decodeURIComponent(countryName),
  );
  if (!country) {
    redirect("/error");
    return <></>;
  }
  const countriesBorders = await getCountryBorders(country);

  return (
    <main className="mx-auto max-h-screen max-w-[1440px] space-y-10 px-6 pt-10 md:px-24">
      <Link
        href={"/"}
        className="Border_custom flex w-fit items-center gap-4 px-5 py-2 transition-all duration-300 hover:scale-105"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        <p className="font-semibold">Back</p>
      </Link>

      <article className="flex w-full items-center justify-between gap-24">
        <div className="relative h-80 w-full rounded-lg border-[16px] border-zinc-100 dark:border-zinc-900/80">
          <Image
            src={country.flags.svg}
            alt={country.flags.alt}
            priority
            fill
            className="object-cover"
          />
        </div>

        <aside className="flex w-full flex-col gap-6">
          <h1 className="country-title">{country.name.common}</h1>

          <div className="flex justify-between">
            <section className="flex w-max flex-col gap-2">
              <p className="country-description">
                Native Name:{" "}
                <span className="font-normal">
                  {Object.values(country.name.nativeName)[0].official}
                </span>
              </p>

              <p className="country-description">
                Population:{" "}
                <span className="country-value">{country.population}</span>
              </p>

              <p className="country-description">
                Region: <span className="country-value">{country.region}</span>
              </p>

              <p className="country-description">
                Sub Region:{" "}
                <span className="country-value">{country.subregion}</span>
              </p>

              <p className="country-description">
                Capital:{" "}
                <span className="country-value">{country.capital}</span>
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <p className="country-description">
                Top Level Domain:{" "}
                <span className="country-value">{country.tld}</span>
              </p>

              <p className="country-description">
                Currencies:{" "}
                <span className="country-value">
                  {Object.values(country.currencies)[0].name}
                </span>
              </p>

              <p className="country-description">
                Languages:{" "}
                <span className="country-value">
                  {Object.values(country.languages).map(
                    (language, index, array) => (
                      <span key={index}>
                        {language}
                        {index < array.length - 1 ? ", " : ""}
                      </span>
                    ),
                  )}
                </span>
              </p>
            </section>
          </div>

          <section className="flex flex-col gap-2">
            <p className="country-description">Border Countries:</p>
            <div className="flex gap-3 justify-center">
              {countriesBorders ? (
                countriesBorders.map((country, index) => (
                  <Link
                    href={`/country/${country.name}`}
                    className={`${badgeVariants({ variant: "outline" })} Animate_3s hover:scale-105`}
                    key={index}
                  >
                    {country.name}
                  </Link>
                ))
              ) : (
                <span className="country-value">
                  This country has no borders !
                </span>
              )}
            </div>
          </section>
        </aside>
      </article>
    </main>
  );
}
