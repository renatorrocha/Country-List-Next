import ListAllCountries from "@/components/list-all-countries";
import SearchBar from "@/components/searchbar";

export default async function Home() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  return (
    <main className="mx-auto max-h-screen max-w-[1440px] px-6 pt-10 md:px-24">
      <SearchBar />
      <ListAllCountries data={countries} />
    </main>
  );
}
