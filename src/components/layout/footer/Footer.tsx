import React from "react";
import Container from "../Container";
import ColHeader from "./ColHeader";

import Col from "./Col";
import ColLink from "./ColLink";
import CopyFooter from "./CopyFooter";
import { disclosures, forms } from "./data";

const Footer = () => {
  return (
    <footer className="bg-brandingGrey-700 text-white">
      <Container>
        <div className="py-4 grid grid-cols-4 gap-4">
          <Col>
            <ColHeader title="contact us" />
            <div>
              <div>10 Peachtree Place, NE</div>
              <div>Atlanta, GA 30309</div>
            </div>
            <div>
              <div>
                Phone: <a href="tel:+18007716695">(800) 771-6695</a>
              </div>
              <div>
                Email:{" "}
                <a href="mailto:mutualsavingscu@mutualsavingscu.org">
                  mutualsavingscu@mutualsavingscu.org
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <ColHeader title="disclosures" />
            {disclosures.map((disclosure, id) => (
              <ColLink
                key={id}
                href={disclosure.href}
                linkText={disclosure.linkText}
              />
            ))}
          </Col>
          <Col>
            <ColHeader title="forms" />
            {forms.map((form, id) => (
              <ColLink key={id} href={form.href} linkText={form.linkText} />
            ))}
          </Col>
          <Col>
            <div>NCUA Logo</div>
            <div>Equal house lender logo</div>
          </Col>
        </div>
        <CopyFooter />
      </Container>
    </footer>
  );
};

export default Footer;
