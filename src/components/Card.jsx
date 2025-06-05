import React from "react";
import Button from "./Button";
import { github } from "../assets";

const buttonStyle = "bg-rose-500 cursor-pointer justify-self-end text-white px-2 py-1 mt-2 rounded-md transition duration-150 hover:bg-rose-700 w-full";

const Card = ({ title, link, image, tech }) => {
  return (
        
        <div
        className="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg h-71 w-96 hover:shadow-xl bg-gray-800 p-5"
        > 
            <img src={image} alt={title} className="h-40 w-full object-cover rounded-lg"/>
            <div className="pt-2 flex flex-col">
                   
                <h2 className="font-semibold ">{title}</h2>
                <p>
                    Technologies:
                </p>
                <p>
                    {tech}
                </p>
                <Button name={"Github"} link={link} style={buttonStyle}/>

            </div>
        </div>        
        
  )
};

export default Card;