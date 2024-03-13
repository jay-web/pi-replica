import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Title from "../components/Title";

import ScaleIn from "./scaleIn";

const Card = ({ info, fontSize, isSquare = false, isRectangle = false }) => {
  const { img, title, id } = info;
  const squareClass = isSquare && "col-span-full";
  const rectangleClass = isRectangle
    ? "flex-row col-span-full p-3 bg-white"
    : "flex-col";

  return (
    <Link
      to={`/details/${id}`}
      className={`rounded-xl cursor-pointer 
                  relative shadow-md ${squareClass} ${rectangleClass}`}
    >
      <ScaleIn classes={`flex ${squareClass} ${rectangleClass} `}>
        <div className={`${isRectangle ? "order-last basis-1/2" : ""}`}>
          <LazyLoadImage
            alt="sun"
            src={img}
            width="100%"
            height="100%"
            className={`rounded-xl ${!isRectangle && !isSquare && "h-32"}`}
          />
        </div>
        <Title title={title} isRectangle={isRectangle} fontSize={fontSize} />
      </ScaleIn>
    </Link>
  );
};

export default Card;
