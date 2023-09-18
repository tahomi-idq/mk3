import ScreenConfig from "../ScreenConfig";
import React from "react";
import mk3 from "../../../../assets/images/mk3.png";

export default function StartScreen({ nextScreen }: ScreenConfig): JSX.Element {
  return (
    <div className="w-screen h-screen relative flex flex-col">
      <img className="h-[90vh] w-auto" src={mk3} alt="" />
      <button
        className="mx-auto text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        onClick={() => {
          nextScreen();
        }}
      >
        Start app
      </button>
    </div>
  );
}
