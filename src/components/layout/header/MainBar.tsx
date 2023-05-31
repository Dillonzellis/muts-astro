import Button from "../../Button";
import Container from "../Container";

const MainBar = () => {
  return (
    <div className="bg-white py-2">
      <Container>
        <div className="flex items-center justify-between">
          <a href="#">
            <img
              src="http://dev2.growthbydesign.org/wp-content/uploads/Logo.png"
              alt="logo"
              width={260}
              height={65}
            />
          </a>
          <Button btnText="LOGIN" link="#" />
        </div>
      </Container>
    </div>
  );
};

export default MainBar;
