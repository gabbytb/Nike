import { Link } from "react-router-dom";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";


const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          
          <Link to="/" alt="">
            <img src={headerLogo} alt="Logo"  width={130} height={29} />
          </Link>

          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {
              navLinks.map((item) => {
                return (
                  <li key={item.label}>
                    <Link to={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">{item.label}</Link>
                  </li>
                );
              })
            }
          </ul>

          <div className="hidden max-lg:block">
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </div>
        </nav>
    </header>
  );
};
export default Nav;