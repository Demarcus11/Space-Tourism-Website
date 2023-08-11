import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../util/useMediaQuery";

export default function Nav() {
  const matches = useMediaQuery("(max-width: 560px)");

  const variants = matches
    ? {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
      }
    : {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 1, x: 0 },
      };

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
          <motion.ul
            animate={navOpened ? "open" : "closed"}
            variants={variants}
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
          </motion.ul>
        </nav>
      </header>
    </>
  );
}
