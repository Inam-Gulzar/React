import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className=" w-screen h-screen duration-200 flex justify-center "
      style={{ backgroundColor: color }}
    >
      <div className="  fixed  bottom-16 flex flex-wrap justify-center inset-x-0 p-2  ">
        <div className=" bg-white gap-4 flex flex-wrap shadow-lg justify-center p-3 rounded-full">
          <button
            onClick={() => setColor("red")}
            className=" rounded-md outline-none px-4 text-xl py-3"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setColor("black")}
            className=" rounded-md outline-none px-4 text-xl text-white py-3"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
            onClick={() => setColor("pink")}
            className=" rounded-md outline-none px-4 text-xl py-3"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
          <button
            onClick={() => setColor("blue")}
            className=" rounded-md outline-none px-4 text-xl py-3"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setColor("olive")}
            className=" rounded-md outline-none px-4 text-xl py-3"
            style={{ backgroundColor: "olive" }}
          >
            olive
          </button>
          <button
            onClick={() => setColor("magenta")}
            className=" rounded-md outline-none px-4 text-xl py-3"
            style={{ backgroundColor: "magenta" }}
          >
            magenta
          </button>
          <button
            onClick={() => setColor("pink")}
            className=" rounded-md outline-none px-4 text-xl py-3"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
