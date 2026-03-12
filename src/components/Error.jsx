import mist from "../assets/dog.jpeg";
import { useNavigate } from "react-router-dom";

function Error() {

  const navigate = useNavigate();

  return (
    <div className="h-[100vh] w-[100%] bg-[rgb(218,143,143)] flex justify-center items-center ">
      
      <div className="relative">
        
        <img className="image" src={mist} />

        <button 
          onClick={() => navigate("/")}
          className="btn cursor-pointer absolute top-[45%] left-[60%] bg-[rgb(80,50,40)] text-white px-4 py-2 rounded-full h"
        >
          GO BACK
        </button>

      </div>

    </div>
  );
}

export default Error;