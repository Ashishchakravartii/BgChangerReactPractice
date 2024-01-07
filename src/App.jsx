import React,{useState} from 'react'

const App = () => {

  const [displayColor, setdisplayColor] = useState("");
  const [text, setText] = useState("White")

  const redHandler=()=>{
    setdisplayColor("#EF4444");
    setText("RED")
  }
  const greenHandler=()=>{
    setdisplayColor("#16A34A");
    setText("GREEN")
  }
  const yellowHandler = () => {
    setdisplayColor("#FDE047");
    setText("YELLOW");

  };
  const blueHandler = () => {
    setdisplayColor("#60A5FA");
    setText("BLUE");

  };
  const tealHandler = () => {
    setdisplayColor("#2DD4BF");
    setText("TEAL");

  };
  const roseHandler = () => {
    setdisplayColor("#FB7185");
    setText("ROSE");

  };


  return (
    <div
      style={{ backgroundColor: `${displayColor}` }}
      className="w-full h-screen flex-col  flex justify-between  items-center"
    >
      <div></div>
      <h1 className='text-5xl text-white'>Ohhhh, Woahhh!!! It's {text}</h1>
      <div className="w-2.5/3  pb-5">
        <div className=" bg-slate-800 text-white rounded-lg w-full justify-center items-center p-1 gap-20 flex">
          <button
            onClick={redHandler}
            className="pl-1.5 bg-red-500 rounded-full w-16 p-1"
          >
            Red
          </button>
          <button
            onClick={greenHandler}
            className="pl-1.5 bg-green-600 rounded-full w-16 p-1 ps-3"
          >
            Green
          </button>
          <button
            onClick={yellowHandler}
            className="pl-1.5 bg-yellow-300 rounded-full w-16 p-1 ps-3"
          >
            Yellow
          </button>
          <button
            onClick={blueHandler}
            className="pl-1.5 bg-blue-400 rounded-full w-16 p-1 ps-3"
          >
            Blue
          </button>
          <button
            onClick={tealHandler}
            className="pl-1.5 bg-teal-400 rounded-full w-16 p-1 ps-3"
          >
            teal
          </button>
          <button
            onClick={roseHandler}
            className="pl-1.5 bg-rose-400 rounded-full w-16 p-1 ps-3"
          >
            Rose
          </button>
        </div>
      </div>
    </div>
  );
}

export default App