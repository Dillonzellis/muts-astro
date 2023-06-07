import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Button from "../../Button";
import Container from "../Container";

const MainBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuClick = () => {
    console.log("clicked");
  };

  return (
    <div className="bg-white py-2">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <a href="#">
            <img
              src="http://dev2.growthbydesign.org/wp-content/uploads/Logo.png"
              alt="logo"
              width={260}
              height={65}
            />
          </a>
          <Bars3Icon
            onClick={handleMenuClick}
            className="h-10 w-10 text-brandingBlue-400 md:hidden"
          />
          <Button
            btnText="LOGIN"
            link="#"
            className="hidden font-bold md:flex"
          />
        </div>
      </Container>
    </div>
  );
};

export default MainBar;
