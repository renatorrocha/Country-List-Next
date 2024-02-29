import Link from "next/link";
import ThemeSwitch from "./themeSwitch";

export default function Navbar() {
  return (
    <nav className="mx-auto flex items-center justify-between px-6 py-6 shadow-md md:px-24">
      <Link href="/" className="Animate_3s font-bold hover:scale-105 ">
        Where in the world?
      </Link>
      <ThemeSwitch />
    </nav>
  );
}
