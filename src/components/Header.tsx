import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [navOpened, setNavOpened] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Destination", href: "/destination" },
    { name: "Crew", href: "/crew" },
    { name: "Technology", href: "/technology" },
  ];

  return (
    <>
      <header className="primary-header">
        <img className="logo" src="/assets/shared/logo.svg" alt="logo" />

        <button
          className="nav-toggle"
          onClick={() => setNavOpened((prev) => !prev)}
        >
          {navOpened ? (
            <img className="close" src="/assets/shared/icon-close.svg" alt="" />
          ) : (
            <img
              className="hamburger"
              src="/assets/shared/icon-hamburger.svg"
              alt=""
            />
          )}
        </button>

        <nav>
          <ul
            className="primary-nav"
            data-opened={navOpened ? "true" : "false"}
          >
            {links.map((link, index) => (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) => {
                    // We need to say return here because we are using a function body instead of an expression body
                    return isActive ? "active" : "";
                  }}
                >
                  <span>{index <= 9 ? "0" + index : index}</span>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
