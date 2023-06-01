interface NavLinkProps {
  text: string;
  link: string;
}

const NavLink = ({ text, link }: NavLinkProps) => {
  return (
    <li className="text-lg font-light capitalize text-white">
      <a href={`/${link}`}>{text}</a>
    </li>
  );
};

export default NavLink;
