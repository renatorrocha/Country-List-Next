import { getCountryByName } from "@/app/actions";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default async function page({ params }: { params: { slug: string } }) {
  const country = await getCountryByName(params.slug);
  console.log(country[0].name.common);

  return (
    <main className="group mx-auto max-h-screen max-w-[1440px] px-6 pt-10 md:px-24">
      <Link
        href={"/"}
        className="Border_custom flex w-fit items-center gap-4 px-5 py-2 transition-all duration-300 hover:scale-105"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        <p className="font-semibold">Back</p>
      </Link>

      <section>
        <p>{country[0].name.common}</p>
      </section>
    </main>
  );
}
