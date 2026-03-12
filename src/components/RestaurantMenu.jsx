import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { RestaurentMenuData } from "../assets/RestaurentMenuData";
import RestaurantMenuList from "./RestaurantMenuList";
import chef from "../assets/chef.png";
import { FaHotel } from "react-icons/fa6";

let Restaurant = () => {
  const [resData, setResData] = useState(null);
  const params = useParams();

  const res = RestaurentMenuData.filter(
    (x) => x.data.cards[2].card.card.info.id == params.id
  );

  useEffect(() => {
    setResData(res[0]);
  }, [params.id]);

  if (resData == null) {
    return <div>Loading......</div>;
  }

  const info = resData.data.cards[2].card.card.info;

  return (
    <>
      <div className="resContainer py-[5vh] px-[15vw]">

        
        <div className="resTitle flex items-center justify-center gap-4 pb-[5vh] text-[1.5rem] italic font-bold relative">
          <img
            className="h-[10rem] absolute left-[1rem]"
            src={chef}
            alt="chef"
          />

          {resData.data.cards[0].card.card.text !== undefined
            ? resData.data.cards[0].card.card.text
            : info.name}

          <img
            className="h-[10rem] absolute right-[1rem]"
            src={chef}
            alt="chef"
          />
        </div>

       
        <div className="resMenuContainer flex flex-col gap-[2rem]">
          {resData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.map(
            (x, index) => (
              <RestaurantMenuList key={index} value={x} />
            )
          )}
        </div>

      </div>

      
      <div className="flex justify-center items-center  h-[5rem] bg-red-400 w-full gap-2 py-3 text-lg font-semibold text-white">
        <FaHotel />
        {info.city}, {info.areaName}
      </div>
    </>
  );
};

export default Restaurant;