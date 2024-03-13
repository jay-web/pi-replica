import { Link } from "react-router-dom";

const NavigateButton = ({ onClick, to, children }) => {
  return (
    <Link
      to={to}
      className={`bg-[#ede1d1] rounded-full text-center p-1.5`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavigateButton;
