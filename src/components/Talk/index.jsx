import { useState } from "react";
import NavigateButton from "../../ui/navigateButton";

const Talk = ({ placeholder, children }) => {
  const [input, setInput] = useState("");
  return (
    <div className="flex justify-center w-full px-3 py-2 bg-white border-2 border-slate-200 rounded-3xl">
      <input
        type="text"
        placeholder={placeholder}
        className="w-dvw bg-transparent focus:outline-none"
        onChange={(e) => setInput(e.target.value)}
      />
     
        <NavigateButton to={"/conversation"}>
     
          {children}
         
        </NavigateButton>
  
    </div>
  );
};

export default Talk;


