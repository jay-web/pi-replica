import AnimateText from "./animateText";

const Points = (content, index) => {
  if (typeof content == "string") {
    return <div className="py-2" key={index}>
      <AnimateText content={content}/>
    </div>;
  }

  let keys = Object.keys(content);

  return (
    <div className="px-4" key={index}>
      <ul className="list-outside list-disc pl-2">
        {keys.map((topic, index) => {
          return (
            <li key={index}>
              <AnimateText content={ `${topic}: ${content[topic]}`}/>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Points;
