interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="text-[2em] mx-[0] my-[.67em] uppercase"> {text}</h1>;
};

export default Title;
