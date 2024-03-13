import { useNavigate } from "react-router-dom";
import NavigateButton from "../../ui/navigateButton";



const Header = ({rightSVG, leftSVG}) => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between px-6 py-1.5">
      <NavigateButton onClick={() => navigate(-1)}>{leftSVG}</NavigateButton>
      <NavigateButton onClick={() => navigate(-1)}>{rightSVG}</NavigateButton>
    </header>
  );
};

export default Header;
