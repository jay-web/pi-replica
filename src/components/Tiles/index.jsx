import Card from "../../ui/card";

import data from "../../data/index.json";
import {isPrime} from "../../utils";

const Tiles = () => {
  return (
    <div className="flex flex-col px-6 pb-6 overflow-y-scroll">
      <h1 className="pb-6 text-xl">Good Evening, Jay</h1>
      <div className="grid grid-flow-row grid-cols-2 gap-y-7 gap-x-4 h-dvh scroll-smooth">
        {data.discover.map((info) => {
          return (
            <Card
              info={info}
              key={info.id}
              isRectangle={ isPrime(info.id) }
              isSquare={info.id % 4 == 0}
              
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tiles;
