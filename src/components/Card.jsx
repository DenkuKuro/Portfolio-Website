import React from "react";
import Button from "./Button";
import { github } from "../assets";

const Card = ({ title, link, image, tech }) => {
  return (
    <div className="group relative w-full max-w-sm bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-rose-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
      {/* Decorative gradient border */}
      <div className='absolute -inset-0.5 bg-gradient-to-r from-rose-500/20 to-orange-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      
      <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl overflow-hidden h-full flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors duration-300">
            {title}
          </h2>
          
          <div className="mb-4 flex-grow">
            <p className="text-gray-400 text-sm font-medium mb-2">Technologies Used:</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              {tech}
            </p>
          </div>
          
          <Button 
            name="View on GitHub" 
            link={link} 
            style="w-full px-4 py-3 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
          />
        </div>
      </div>
    </div>
  )
};

export default Card;