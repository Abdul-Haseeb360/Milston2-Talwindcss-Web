import React from "react";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-3xl m-5">This is Home Page</h1>
      <div className="justify-center items-center lg:flex sm:block ">
        <div className="w-96 m-1 bg-gray-800 rounded cursor-pointer opacity-100 hover:opacity-90 shadow-md ">
          <div className="image">
            <img
              className="w-[100%] block rounded"
              src="./Images/morning.jpg"
              alt="Lizard-Image"
            />
          </div>
          <div className="p-5 pt-6 text-[hsl(0,0%,91%)] font-bold font-inter">
            <p>
            Florida is the southeasternmost U.S. state, with the Atlantic on one side and the Gulf of Mexico on the other. It has hundreds of miles of beaches. The city of Miami is known for its Latin-American cultural influences 
            </p>
          </div>
        </div>
        <div className="w-96 m-1 bg-gray-800 rounded cursor-pointer opacity-100 hover:opacity-90 shadow-md">
          <div className="image">
            <img
              className="w-[100%] block rounded"
              src="./Images/florida.jpg"
              alt="Lizard-Image"
            />
          </div>
          <div className="p-5 pt-6 text-[hsl(0,0%,91%)] font-bold font-inter">
            <p>
            Florida is the theme park epicenter of the world. All of the titans of family entertainment are here -- Disney, Universal, SeaWorld, LEGOLAND, Busch Gardens. Orlando attracts
            </p>
          </div>
        </div>
        <div className="w-96 m-1 bg-gray-800 rounded cursor-pointer opacity-100 hover:opacity-90 shadow-md">
          <div className="image">
            <img
              className="w-[100%] block rounded"
              src="./Images/florida3.jpg"
              alt="Lizard-Image"
            />
          </div>
          <div className="p-5 pt-6 text-[hsl(0,0%,91%)] font-bold font-inter">
            <p>
            Florida has 411 cities. They range in population from Marineland (8) to Jacksonville (907,093); in location from Key West to Fernandina Beach to Pensacola; and makeup
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
