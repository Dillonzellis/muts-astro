import Container from "../../components/layout/Container";
import ContentSection from "../../components/layout/ContentSection";

const JoinCTA = () => {
  return (
    <ContentSection>
      <Container>
        <div className="flex justify-center">
          <div className="flex max-w-prose flex-col gap-4 text-center">
            <div className="text-3xl">Learn how to join MSCU today!</div>
            <div>
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
