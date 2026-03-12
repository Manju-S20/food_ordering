import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Constant/cartSlice";
import { IoIosArrowDropdown } from "react-icons/io";

let RestaurantMenuList = ({ value }) => {

  let [showList, setShowList] = useState(false);
  const dispatch = useDispatch();

  let handleClick = () => {
    setShowList(!showList);
  };
  let handleSubmit =(i)=>{
    dispatch(addItem(i))
  };


  const imgLink =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="resMenu rounded-[20px] bg-[rgba(253,226,226,1)]">

      <div
        className="resMenuTitle text-[1.2rem]  mb-[1rem] flex items-center justify-between font-serif font-bold bg-[rgba(255,252,252,1)] shadow-xl active:bg-[rgba(251,196,196,1)] hover:bg-[rgba(249,213,213,1)] py-[0.8rem] px-[1rem]"
        onClick={handleClick}
      >
        {value.card.card.title}<IoIosArrowDropdown />
      </div>

      {showList && (
        <div>

          {value.card.card.itemCards !== undefined
            ? value.card.card.itemCards.map((item, i) => (

                <div
                  className="resMenuItems flex p-[0.8rem] gap-[4rem] justify-between border-b-2 border-b-[rgb(213,143,143)]"
                  key={i}>

                  <div className="foodDetails flex flex-col gap-[0.5rem]">

                    <div className="foodName font-bold">
                      {item.card.info.name}
                    </div>

                    <div className="foodDescription text-[1rem]">
                      {item.card.info.description !== undefined
                        ? item.card.info.description
                        : "Description not available"}
                    </div>

                    <div className="foodPrice">
                      ₹{item.card.info.price / 100}
                    </div>

                  </div>

                  <div className="imageContainer relative w-[15%]">

                    <img
                      className="resMenuImage w-full  rounded-[1rem] h-[14vh]"
                      src={imgLink + item.card.info.imageId}
                      alt={item.card.info.name}
                    />
                    
                    <button
                    className="addBtn h-[2rem] w-[4rem] absolute bottom-[0.03px] left-1/2 -translate-x-1/2 bg-white rounded-[10px] hover:bg-[rgb(233,193,193)] active:bg-[rgba(232,150,150,1)]"
                    onClick={() => handleSubmit(item)}>
                    Add+
                  </button>
                  </div>

                </div>
              ))
            : null}

        </div>
      )}

    </div>
  );
};

export default RestaurantMenuList;