import Header from "../components/Header";
import Tiles from "../components/Tiles";
import AnimateRouting from "../ui/animateRouting";
import Cross from "../ui/cross";
import Profile from "../ui/profile";


const Home = () => {
  return (
    <AnimateRouting classes="flex flex-col p-2 h-dvh" >
      <Header rightSVG={<Profile />} leftSVG={<Cross />} />

      <Tiles />
    </AnimateRouting>
  );
};

export default Home;
