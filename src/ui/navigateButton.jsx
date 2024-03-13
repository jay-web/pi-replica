import { Link } from "react-router-dom";


const NavigateButton = ({onClick, backgroundColor, to, children}) => {
   let bg = backgroundColor ? `bg-[${backgroundColor}] text-white` : 'bg-[#ede1d1]';


    return <Link to={to} className={`${bg} rounded-full text-center p-1.5`} onClick={onClick}>
        {children}
    </Link>
   
   
}

export default NavigateButton;