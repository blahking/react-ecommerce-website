import { useState, useRef, useEffect } from "react";

import Container from "./Container";
import Logo from "../UI/Logo";
import Icon from "../UI/Icon";
import UserIcon from "../../assets/images/user-icon.png";
import Sidebar from "./Sidebar";
import NavLinks from "./NavLinks";

const Header = () => {
  const headerRef = useRef(null);
  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeader();

    return () => window.removeEventListener("scroll", stickyHeader);
  });

  const [sidebarIsShow, setSidebarIsShow] = useState(false);

  const toggleSidebar = () => {
    setSidebarIsShow(!sidebarIsShow);
  };

  return (
    <header ref={headerRef} className="h-[60px] lg:h-[70px] text-primary">
      <Container className="flex items-center justify-between">
        <Logo />
        <div className="navigation hidden lg:block">
          <ul className="menu flex items-center gap-10 ">
            <NavLinks />
          </ul>
        </div>
        <div className="nav-icons flex items-center gap-4">
          <Icon name="ri-home-heart-line" />
          <Icon name="ri-shopping-bag-line" />
          <span className="cursor-pointer">
            <img src={UserIcon} alt="user icon" className="w-8" />
          </span>
          <Icon
            name="ri-menu-line"
            className="lg:hidden"
            onClick={toggleSidebar}
          />
        </div>
        {sidebarIsShow && <Sidebar onClose={toggleSidebar} />}
      </Container>
    </header>
  );
};

export default Header;
