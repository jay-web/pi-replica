import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center pt-2 text-sm">
      By using Pi, you agree to our <Link to="#">Terms</Link> and <Link to="#">Privacy Policy</Link>
    </footer>
  );
};

export default Footer;
