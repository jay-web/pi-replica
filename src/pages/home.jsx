import Header from "../components/Header";
import Tiles from "../components/Tiles";
import AnimateRouting from "../ui/animateRouting";
import Cross from "../ui/cross";
import PageLayout from "../ui/pageLayout";
import Profile from "../ui/profile";


const Home = () => {
  return (
    <PageLayout >
      <Header rightSVG={<Profile />} leftSVG={<Cross />} />

      <Tiles />
    </PageLayout>
  );
};

export default Home;
