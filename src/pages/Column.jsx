import React from "react";

const Column = () => {
  return (
    <div className="max-w-5xl w-full flex flex-col  gap-4 px-20 ">
      <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-400 to-yellow-700  rounded-md">
        <div className="p-10 gap-3 flex flex-col">
          <h1 className="font-bold">Transfer money</h1>
          <form className="flex  gap-3">
            <div className="flex flex-col justify-center items-center gap-2">
              <input
                className="bg-yellow-200 rounded-lg focus:outline-none  py-2"
                id="transferto"
              ></input>
              <label htmlFor="transferto" c>
                Transfer to
              </label>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <input
                className="bg-yellow-200 rounded-lg focus:outline-none  py-2"
                id="transferto"
              ></input>
              <label htmlFor="transferto">Amount</label>
            </div>
            <button type="submit" className="bg-white h-10 rounded-lg p-2">
              send
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-200 via-green-400 to-green-500  rounded-md">
        <div className="p-10 gap-3 flex flex-col">
          <h1 className="font-bold">Request loan</h1>
          <form className="flex  gap-3">
            <div className="flex flex-col justify-center items-center gap-2">
              <input
                className="bg-green-200 rounded-lg focus:outline-none  py-2"
                id="transferto"
              ></input>
              <label htmlFor="transferto" c>
                Amount
              </label>
            </div>

            <button type="submit" className="bg-white h-10 rounded-lg p-2">
              send
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-200 via-red-400 to-red-500  rounded-md">
        <div className="p-10 gap-3 flex flex-col">
          <h1 className="font-bold">Close account</h1>
          <form className="flex  gap-3">
            <div className="flex flex-col justify-center items-center gap-2">
              <input
                className="bg-red-200 rounded-lg focus:outline-none  py-2"
                id="transferto"
              ></input>
              <label htmlFor="transferto">Confirm user</label>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <input
                className="bg-red-200 rounded-lg focus:outline-none  py-2"
                id="transferto"
              ></input>
              <label htmlFor="transferto">Confirm PIN</label>
            </div>
            <button type="submit" className="bg-white h-10 rounded-lg p-2">
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Column;
