import { useState } from "react";
import { useRouter } from "next/router";
import { MenuIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import { XIcon as CloseIcon } from "@heroicons/react/outline";
import { logout } from "../utils/firebase/firebaseAuth";
import { useAuth } from "@/utilities/context/userContext";
import { getSearchState } from "@/utilities/context/searchContext";
import NotificationMenu from "./NotificationMenu";
import ServiceMenu from "./ServiceMenu";
import MyLink from "./MyLink";

function Navbar() {
  const user = useAuth();
  const { route, push } = useRouter();
  const { setSearchStateActive, activeCategory } = getSearchState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="bg-primary-lighter px-4 py-3 md:px-4 md:flex md:justify-between md:items-center font-inter">
        {/* Menu button on mobile */}
        <span id="menu-button" className="md:hidden" onClick={handleMenuClick}>
          {!isMenuOpen ? (
            <MenuIcon className="h-6 w-6 text-gray inline-block" />
          ) : (
            <CloseIcon className="h-6 w-6 text-gray inline-block" />
          )}
        </span>

        {/* brand name */}
        <span className="ml-4 font-bold">FOODY</span>

        {/* In app navigation starts */}
        <div
          id="menu-options"
          className={`${
            isMenuOpen ? "flex flex-col" : "hidden"
          } md:flex md:flex-row md:items-center justify-center gap-4 my-4 md:my-0`}
        >
          <MyLink
            href="/"
            className={`relative inline-block px-4 py-2 ${
              route === "/" ? "text-primary md:dot" : ""
            }`}
          >
            Why foody?
          </MyLink>
          <ServiceMenu />
          <MyLink
            href="/menu"
            className={`relative inline-block px-4 py-2 ${
              route === "/menu" ? "text-primary md:dot" : ""
            }`}
          >
            Menu
          </MyLink>
          <MyLink
            href="/contact"
            className={`relative inline-block px-4 py-2 ${
              route === "/contact" ? "text-primary md:dot" : ""
            }`}
          >
            Contact
          </MyLink>
        </div>
        {/* In app navigation ends */}

        {/* Other interactions */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex items-center justify-between md:justify-center gap-6`}
        >
          <SearchIcon
            className="h-6 w-6 text-gray inline-block cursor-pointer"
            onClick={() => {
              setSearchStateActive((prev) => !prev);
              push(`/menu?category=${activeCategory}`);
            }}
          />
          <NotificationMenu />
          {!user ? (
            <MyLink
              href={"/login"}
              className="bg-primary text-white px-6 py-2 rounded-full tracking-wider hover:bg-primary-dark"
            >
              Login
            </MyLink>
          ) : (
            <button
              onClick={logout}
              className="bg-primary text-white px-6 py-2 rounded-full tracking-wider hover:bg-primary-dark"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
