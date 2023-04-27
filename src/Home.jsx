import Table from "./pages/Table";
import Footer from "./pages/Footer";
import Column from "./pages/Column";
import { Navigate, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };

  const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };

  const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };

  const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };

  const accounts = [account1, account2, account3, account4];
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  // dumy validation login
  const username = localStorage.getItem("username");
  useEffect(() => {
    if (username !== "Demo") {
      navigate("/login");
    }
  });

  // lableBlanace
  const [lableBlanace, setlableBlanace] = useState();
  const calcDisplayBalance = function (movements) {
    const balance = movements.reduce((acc, mov) => acc + mov, 0);
    setlableBlanace(balance);
  };
  useEffect(() => {
    calcDisplayBalance(account1.movements);
  }, [lableBlanace]);

  // create username
  const createUsernames = function (accs) {
    accs.forEach(function (acc) {
      acc.username = acc.owner
        .toLowerCase()
        .split("")
        .map((name) => name[0])
        .join("");
    });
  };
  useEffect(() => {
    createUsernames(accounts);
  }, [accounts]);

  // display summery calc

  const [lableSumIn, setlableSumIn] = useState();
  const [lableSumOut, setlableSumOut] = useState();
  const [lableSumIntrest, setlableSumIntrest] = useState();
  const calcDisplaySummery = function (movements) {
    const incoms = movements
      .filter((mov) => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
    setlableSumIn(incoms);

    const out = movements
      .filter((mov) => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
    setlableSumOut(out);

    const interest = movements
      .filter((mov) => mov > 0)
      .map((deposit) => (deposit * 1.2) / 100)
      .filter((int, i, arr) => {
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);
    setlableSumIntrest(interest);
  };

  useEffect(() => {
    calcDisplaySummery(account1.movements);
  }, [lableSumIn, lableSumOut, lableSumIntrest]);

  // calcDisplayBalance(account1);

  return (
    <div>
      {/* header */}
      <div className="flex justify-between items-center px-8 py-10">
        <div className="font-semibold">Good morning , mehrdad</div>
        <img
          className="h-20"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Bank_Melli_Iran_New_Logo.png"
        />
        <div>
          <div>
            <form className="gap-2 flex">
              <input
                placeholder="user"
                className="bg-gray-200 rounded-full w-20 p-2"
              ></input>
              <input
                placeholder="pin"
                className="bg-gray-200 rounded-full w-20 p-2"
              ></input>
              <button type="submit"> send</button>
            </form>
          </div>
        </div>
      </div>

      {/* main hedaer */}
      <div className="flex justify-between px-20 font-bold py-10">
        <div>
          {" "}
          <h1 className="text-3xl">Current balance</h1>
          <h3 className="text-md">As of 31/07/2020,18:37</h3>
        </div>

        <div>
          <h1 className="text-3xl">21 952,59 $</h1>
        </div>
      </div>
      <div className="flex  px-52 md:px-30  h-full">
        {/* table */}
        <Table />
        {/* column */}
        <Column />
      </div>

      {/* footer */}
      <div>
        <div className="flex justify-between px-10 py-10">
          {/* left */}
          <div className="flex gap-2">
            <div className="flex gap-2">
              <span>in</span>
              <h1 className=" text-green-500">{lableSumIn} $</h1>
            </div>
            <div className="flex gap-2">
              <span>out</span>
              <h1 className="text-red-500">{lableSumOut} $</h1>
            </div>
            <div className="flex gap-2">
              <span>interest</span>
              <h1 className=" text-green-500">{lableSumIntrest} $</h1>
            </div>

            <button>SORT</button>
          </div>
          {/* right */}
          <div>You will be logged out in 09:50</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
