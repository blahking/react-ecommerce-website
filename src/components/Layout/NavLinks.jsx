import { NavLink } from "react-router-dom";

const links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => (
        <li key={link.path} className="text-sm md:text-base">
          <NavLink
            to={link.path}
            className={(navClass) => (navClass.isActive ? "font-bold" : "")}
          >
            {link.display}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
