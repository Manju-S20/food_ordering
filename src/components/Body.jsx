import { useState,useEffect } from "react";
import Card from "./Card.jsx";
import {RestaurentData} from "../assets/RestaurentData.jsx";
import { CiSearch } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import footer from "../assets/footer.png";
import flexx from "../assets/flexx.png";
import { useLocation } from "react-router-dom";

function Body(){
  // let a=
  // [
  //   { name:" Steamed Chicken Momos",price:150,kcal:320},
  //   { name:" Steamed Mutton Momos",price:200,kcal:400},
  //   { name:" Steamed Prawn Momos",price:250,kcal:300}
  // ] 
  let [data,SetData]=useState(RestaurentData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  let [Ddata,SetDdata]=useState(RestaurentData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  // let [Mdata,SetMdata] =useState(RestaurentMenuData.data)

//  fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01020&lng=76.97010&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
//  .then ((valu)=>valu.json())
//  .then((i)=>SetData(i.data.cards[1].card.card.gridElements.infoWithStyle.restaurants))
function handleSearch()
{
  
  let searchText=document.getElementById("searchInput").value;
  let result =Ddata.filter((element,index)=>element.info.name.toLowerCase().includes(searchText.toLowerCase()))
  SetData(result)
}


 return<div>
  <a href="/"><img src={flexx} /></a>
    <div className="mainContainer ">
     
        <input  placeholder="Search... " className="search border-1 mt-[3rem] text-lg  rounded flex w-[35vw] h-[45px] m-[2rem] p-[8px] bg-[rgb(255,255,255)] justify-self-center " type="text" id="searchInput" onChange={handleSearch} />
        {/* <button>Search</button> */}
      
    </div>

    <div className="secondaryContainer grid grid-cols-4 gap-6 px-10 py-6">
    {
            data.map((x,y) => < Card key = {x.info.id}val={x}/>)
           
    }
    </div>
    
 <footer className="relative">

  <img src={footer} className="w-full h-60" />

  <div className="absolute bottom-8 w-full flex flex-col items-center gap-2">

    <div className="flex justify-center gap-4 text-2xl text-black text-[1rem] ">
      <FaInstagram />
      <FaXTwitter />
      <CiTwitter />
      <CiFacebook />
    </div>

    <a
      className="text-black   active:text-[rgba(47,47,110,1)] hover:text-[rgba(76,76,210,1)] text-sm"
      href="mailto:yummytummy@gmail.com">
      yummytummy@gmail.com
    </a>
    <div className="text-center border-t border-white/30 py-3 text-sm">
    ©️ 2026 Yummy Tummy  | All Rights Reserved
  </div>

  </div>
  

</footer>
 </div>
 
}
export default Body;
