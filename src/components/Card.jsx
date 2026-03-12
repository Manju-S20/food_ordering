import { Link } from "react-router";
import { IoMdStarOutline } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { IoRestaurantOutline } from "react-icons/io5";

 function Card(i)

    {
       let image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
        return(
            <Link to ={i.val.info.id} className="card rounded-[1rem] bg-[rgba(255,252,252,1)] shadow-xl w-[20vw] p-[1rem] active:bg-[rgba(251,196,196,1)] hover:bg-[rgba(249,213,213,1)] ">
                
                    <img  className="cardImage rounded-[1rem] w-[100%] h-[25vh] mb-2"src={image+i.val.info.cloudinaryImageId}/>    
                     <div  className="flex items-center gap-1"><IoRestaurantOutline />{i.val.info.name}</div>    
                    <div className="flex items-center gap-1"><CiLocationOn />{i.val.info.areaName}</div>
                    <div className="flex items-center gap-1"><IoMdStarOutline />{i.val.info.avgRating}</div>
            </Link>)
    }
export default Card        