import React from "react";

const Card = ({ title, link, image, tech }) => {
  return (
        
        <div
        className="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg h-71 w-96 hover:shadow-xl bg-gray-800 p-5"
        >
            {/* <div
            class="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2 h-3/6 rounded-lg"
            ></div> */}
            <img src={image} alt={title} className="h-40 w-full object-cover rounded-lg"/>
            <div className="pt-2 flex flex-col">
                <h2 className="font-semibold">{title}</h2>
                <p>
                    Technologies: {tech}
                </p>
                <a href={link}>
                    <button
                        className="bg-rose-500 cursor-pointer text-white px-2 py-1 mt-2 rounded-md transition duration-150 hover:bg-rose-700 w-full"
                        type="button"
                    >
                        Github
                    </button>
                </a>

            </div>
        </div>        
        
  )
};

export default Card;