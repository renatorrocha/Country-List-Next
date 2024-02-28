import ListAllCountries from "@/components/list-all-countries";
import SearchBar from "@/components/searchbar";

export default async function Home() {
  return (
    <main className="mx-auto max-h-screen max-w-[1440px] px-6 pt-10 md:px-24">
      <SearchBar />
      <ListAllCountries />
    </main>
  );
}
