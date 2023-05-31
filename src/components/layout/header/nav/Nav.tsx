import Container from "../../Container";
import NavLink from "./NavLink";
import { navItems } from "./data";

const Nav = () => {
  return (
    <nav className="bg-brandingBlue-400 py-4">
      <Container>
        <ul className="justify-center gap-24 lg:flex">
          {navItems.map((link, idx) => (
            <NavLink key={idx} text={link.text} link={link.link} />
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
