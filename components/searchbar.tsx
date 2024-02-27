import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Continents } from "@/utils/constants";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function SearchBar() {
  return (
    <section className="flex justify-between">
      <div className="flex items-center gap-4">
        <Input type="text" placeholder="Search for a country..." />

        <Button
          variant="outline"
          className=" hidden items-center md:flex"
          size="icon"
        >
          <SearchIcon className="h-4 w-4" />
        </Button>
      </div>

      <Select>
        <SelectTrigger className="w-[240px]">
          <SelectValue placeholder="Filter by Region" />
        </SelectTrigger>

        <SelectContent>
          {Continents.map((region, index) => (
            <SelectItem key={index} value={region.name}>
              {region.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </section>
  );
}
