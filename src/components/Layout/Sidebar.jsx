import { NavLink } from "react-router-dom";

const Sidebar = ({ links, onClose }) => {
  return (
    <div className="navigation fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.53)] lg:hidden z-10">
      <div className="menu absolute top-0 right-0 w-[250px] h-full bg-white">
        <button
          className="p-5 absolute right-0 cursor-pointer text-3xl"
          onClick={onClose}
        >
          <i className="ri-close-fill"></i>
        </button>
        <ul className="mt-[100px]">
          {links.map((link) => (
            <li key={link.path} className="text-sm md:text-base">
              <NavLink
                to={link.path}
                className={(navClass) =>
                  navClass.isActive
                    ? "sidebar__link font-bold"
                    : "sidebar__link"
                }
              >
                {link.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
