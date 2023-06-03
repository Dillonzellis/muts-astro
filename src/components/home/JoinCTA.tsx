import Container from "../../components/layout/Container";
import ContentSection from "../../components/layout/ContentSection";

const JoinCTA = () => {
  return (
    <ContentSection className="py-24">
      <Container>
        <div className="flex justify-center">
          <div className="flex max-w-prose flex-col gap-4 lg:gap-6 text-center">
            <div className="text-2xl lg:text-4xl text-brandingBlue-400 font-bold">
              Learn how to join MSCU today!
            </div>
            <div className="text-lg">
              Join MSCU and use all of the free services that MSCU offers its
              members such as checking, home banking and bill pay services
            </div>
          </div>
        </div>
      </Container>
    </ContentSection>
  );
};

export default JoinCTA;
