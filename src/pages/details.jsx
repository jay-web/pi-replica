import Header from "../components/Header";
import Cross from "../ui/cross";
import LeftArrow from "../ui/leftArrow";
import data from "../data/index.json";
import { useParams } from "react-router-dom";
import Card from "../ui/card";
import Talk from "../components/Talk";
import Footer from "../components/Footer";
import Points from "../ui/points";
import UpArrow from "../ui/upArrow";
import AnimateRouting from "../ui/animateRouting";

const Details = () => {
  const { id } = useParams();
  const item = data.discover.filter((item) => item.id === Number(id));

  return (
    <AnimateRouting classes="p-2 flex flex-col h-dvh">
      <Header leftSVG={<LeftArrow />} rightSVG={<Cross />} />
      <div className="overflow-y-scroll mb-2">
        {item[0] && <Card info={item[0]} isSquare={true} fontSize="text-xl" />}
        <div className="p-3 h-dvh">
          {item[0].detail.map((content, index) => {
            return Points(content, index);
          })}
        </div>
      </div>
      <Talk placeholder={"Talk with Pi about this"}>
        <UpArrow />
      </Talk>
      <Footer />
    </AnimateRouting>
  );
};

export default Details;
