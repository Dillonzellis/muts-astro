interface Props {
  children: React.ReactNode;
}

const ContentSection = ({ children }: Props) => {
  return <section className="py-12">{children}</section>;
};

export default ContentSection;
