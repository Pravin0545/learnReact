import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-full">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-xl"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-xl"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-xl"
            style={{ backgroundColor: "brown" }}
            onClick={() => setColor("brown")}
          >
            Brown
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-xl"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-xl"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-xl"
            style={{ backgroundColor: "violet" }}
            onClick={() => setColor("violet")}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
