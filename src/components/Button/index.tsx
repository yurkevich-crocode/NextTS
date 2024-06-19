interface ButtonInterface {
  text: string;
  variation?: string;
  onClick?: () => void;
  disable?: boolean;
}

const Button: React.FC<ButtonInterface> = ({
  text,
  onClick,
  variation,
  disable,
}) => {
  return (
    <button
      className={`w-max p-[5px] text-[20px] rounded-[5px] ${
        variation === "black"
          ? "bg-[black] text-[white] "
          : "bg-[white] text-[black]"
      }`}
      onClick={onClick}
      disabled={disable}
    >
      {text}
    </button>
  );
};

export default Button;
