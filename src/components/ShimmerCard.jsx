import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

function ShimmerCard() {
  const [isDark] = useContext(ThemeContext);
  return (
    <Link
      className={`w-64 h-80 decoration-0 text-black relative shadow-lg ${
        isDark ? "bg-[#2b3945] text-white" : " text-black bg-white"
      }`}
      to={`/`}
    >
      <div className="h-40 bg-gray-700 rounded-t-md"></div>
      <div className="p-1">
        <h2 className="my-2 w-3/4 h-6 bg-gray-500"></h2>
        <p className="my-2 w-3/5 h-4 bg-gray-500"></p>
        <p className="my-2 w-3/5 h-4 bg-gray-500"></p>
        <p className="my-2 w-3/5 h-4 bg-gray-500"></p>
      </div>
    </Link>
  );
}

export default ShimmerCard;
