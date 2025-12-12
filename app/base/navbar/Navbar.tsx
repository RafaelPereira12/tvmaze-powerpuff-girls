
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex  h-10" aria-label="Navigation Bar,">
      <ul className="flex justify-evenly w-full" role="none">
        <li>
          <Link href="/" role="none">
            Home
          </Link>
        </li>
        <li>
          <Link href="/episode/favorites" role="none">
            Favorites
          </Link>
        </li>
        {/* <li>
          Search
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;