import Button from "../../../components/Button";
import Container from "../../../components/layout/Container";
import ContentSection from "../../../components/layout/ContentSection";
import CheckItem from "./CheckItem";

const ServicesCTA = () => {
  return (
    <ContentSection>
      <Container>
        <div className="flex justify-center gap-12">
          <div>Img</div>
          <div>
            <div>
              Check out some of the FREE Services MSCU offers its members today!
            </div>
            <CheckItem />
            <CheckItem />
            <CheckItem />
            <Button btnText="apply today" link="#" />
          </div>
        </div>
      </Container>
    </ContentSection>
  );
};

export default ServicesCTA;
