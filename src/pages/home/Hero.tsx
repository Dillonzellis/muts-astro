import React from "react";
import Button from "../../components/Button";
import Container from "../../components/layout/Container";

const Hero = () => {
  return (
    <section className="relative">
      <Container>
        <div className="absolute top-1/4">
          <div className="flex max-w-prose flex-col gap-8 text-white">
            <h1 className="text-6xl font-bold">
              We'll help you pay for that trip to Paradise
            </h1>
            <p>
              Get Summertime loan from MSCU! You can borrow up to $1,000 with a
              low APR* of 8%, and a maximum 6 months tern. Automatic payment is
              required**. Offer available May 1st - August 31st.
            </p>
            <Button btnText="apply today" link="#" className="self-start" />
          </div>
        </div>
      </Container>
      <img
        className="w-full object-cover"
        src="http://dev2.growthbydesign.org/wp-content/uploads/home-hero-plane.jpg"
        alt="hero img"
        width={1920}
        height={1080}
      />
    </section>
  );
};

export default Hero;
