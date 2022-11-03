import NavLinks from "./NavLinks";

const Sidebar = (props) => {
  return (
    <div
      className="navigation fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.53)] lg:hidden"
      onClick={props.onClose}
    >
      <ul className="menu absolute top-0 right-0 w-[250px] h-full bg-white flex flex-col items-center justify-center gap-10">
        <NavLinks />
      </ul>
    </div>
  );
};

export default Sidebar;
