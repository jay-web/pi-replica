import Footer from "../components/Footer";
import Header from "../components/Header";
import Talk from "../components/Talk";
import Speaker from "../ui/speaker";
import LeftArrow from "../ui/leftArrow";
import data from "../data/chat.json";
import Points from "../ui/points";
import Phone from "../ui/phone";
import AnimateRouting from "../ui/animateRouting";

const Conversation = () => {
  return (
    <AnimateRouting classes="p-2 flex flex-col h-dvh">
      <Header leftSVG={<LeftArrow />} rightSVG={<Speaker />} />
      <div className="overflow-y-scroll mb-2">
        <div className="p-3 h-dvh">
          <ul>{data.chat.map((chat, index) => {
            return <li className={`m-2 flex flex-col items-start`} key={index}>
                    <div className={`p-2 ${chat.user !== "" && 'my-2'} rounded-xl inline bg-[#F5EADC] self-end`}>{chat.user}</div>
                    <div className="p-1">
                        {chat.ai.map((aiResponse, index) => {
                           return Points(aiResponse, index)
                        })}
                      
                    </div>
                </li>
          })}</ul>
        </div>
      </div>
      <Talk placeholder={"Talk with Pi"} >
        <Phone />
      </Talk>
      <Footer />
    </AnimateRouting>
  );
};

export default Conversation;
