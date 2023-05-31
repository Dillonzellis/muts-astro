import MainBar from "./MainBar";
import Nav from "./nav/Nav";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <header>
      <TopBar />
      <MainBar />
      <Nav />
    </header>
  );
};
export default Header;
