interface ButtonInterface {
  text: string;
  variation?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonInterface> = ({ text, onClick, variation }) => {
  return (
    <button
      className={`w-max p-[5px] text-[20px] rounded-[5px] ${
        variation === "black"
          ? "bg-[black] text-[white] "
          : "bg-[white] text-[black]"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
