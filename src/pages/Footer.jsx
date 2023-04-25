import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between px-10 py-10">
      {/* left */}
      <div className="flex gap-2">
        <div className="flex gap-2">
          <span>in</span>
          <h1 className=" text-green-500">28 035,20 $</h1>
        </div>
        <div className="flex gap-2">
          <span>out</span>
          <h1 className="text-red-500">28 035,20 $</h1>
        </div>
        <div className="flex gap-2">
          <span>interest</span>
          <h1 className=" text-green-500">28 035,20 $</h1>
        </div>

        <button>SORT</button>
      </div>
      {/* right */}
      <div>You will be logged out in 09:50</div>
    </div>
  );
};

export default Footer;
