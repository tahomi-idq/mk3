import React, { useState } from "react";

export default function Hint(): JSX.Element {
  const [drop, setDrop] = useState(false);

  return (
    <div>
      <button
        id="dropdownDefaultButton"
        onClick={() => {
          setDrop(!drop);
        }}
        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        type="button"
      >
        Show controls{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className={`z-10 ${
          drop ? "" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 p-4`}
      >
        <h1>Controls:</h1>
        <h2>-PlayerSelect</h2>
        <p>P1: "Arrows" for select, "Enter" for lock</p>
        <p>P2: "WASD" for select, "SPACE" for lock</p>
        <h2>-VsScreen</h2>
        <p>1-6 keys for each item, multiple input for different items</p>
      </div>
    </div>
  );
}
