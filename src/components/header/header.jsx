import React from "react";
// Header for the string validation application
const Header = () => {
  return (
    <nav className="flex  flex-wrap bg-black p-6 mb-20">
      <div className="w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3 text-white justify-content: flex-start">
        <h1 className="text-xl font-extrabold">proofpoint</h1>
      </div>
      <div className="w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3 text-white">
        <h1 className="text-xl font-extrabold">Code Assignment</h1>
      </div>
      <div className="w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3 text-white">
        <h1 className="text-xl font-extrabold">Valid Sentence Coding Test</h1>
      </div>
    </nav>
  );
};

export default Header;
