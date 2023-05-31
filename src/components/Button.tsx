import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface ButtonProps {
  btnText: string;
  link: string;
}

const Button = ({ btnText, link }: ButtonProps) => {
  return (
    <div className="inline-flex cursor-pointer items-center gap-1 self-start border bg-brandingGreen-400 px-8 py-3 capitalize text-white">
      <div>
        <a href={link}>{btnText}</a>
      </div>
      <div>
        <ArrowRightIcon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Button;
