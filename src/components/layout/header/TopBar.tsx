import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Container from "../Container";

const TopBar = () => {
  return (
    <div className="bg-zinc-100 py-4 text-black">
      <Container>
        <div className="flex gap-12">
          <div className="flex gap-4">
            <PhoneIcon className="h-6 w-6 text-brandingGreen-400" />
            <div>
              <a href="tel:+18007716695">(800)-771-6695</a>
            </div>
          </div>
          <div className="flex gap-4">
            <EnvelopeIcon className="h-6 w-6 text-brandingGreen-400" />
            <div>
              <a href="mailto:+18007716695">
                mutualsavingscu@mutualsavingscu.org
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
