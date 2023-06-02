type ColProps = {
  children: React.ReactNode;
};
const Col = ({ children }: ColProps) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default Col;
