import { Link } from "react-router-dom";
import ScaleIn from "./scaleIn";

const NavigateButton = ({ onClick, to, children }) => {
  return (
    <Link
      to={to}
      className={`bg-[#ede1d1] rounded-full text-center p-1.5`}
      onClick={onClick}
    >
      <ScaleIn>{children}</ScaleIn> 
    </Link>
  );
};

export default NavigateButton;
