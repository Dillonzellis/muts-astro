export type ColHeaderProps = {
  title: string;
};

const ColHeader = ({ title }: ColHeaderProps) => {
  return <div className="uppercase font-bold">{title}</div>;
};

export default ColHeader;
