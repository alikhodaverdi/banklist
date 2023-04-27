import Table from "./pages/Table";
import Footer from "./pages/Footer";
import Column from "./pages/Column";
import { Navigate, Route } from "react-router-dom";
<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> f6e3db0e0a964ca9354a927d51fff93274aca88f
import Login from "./pages/Login";
import { useNavigate } from "react-router-dom";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

const Home = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  // dumy validation login

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  localStorage.setItem("username", "Demo");
  const usernamex = localStorage.getItem("username");

  useEffect(() => {
    if (username === "Demo") {
=======
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
>>>>>>> f6e3db0e0a964ca9354a927d51fff93274aca88f
      navigate("/login");
    }
  });
  // Event handlers
  let currentAccount;

  // input home login handle
  const userNameInputRef = useRef();
  const pinInputRef = useRef();
  const [labaleWelcome, setlabaleWelcome] = useState();
  const handleClickLogin = (e) => {
    e.preventDefault();
    const currentAccount = accounts.find(
      (acc) => acc.username === userNameInputRef.current.value
    );
    console.log(currentAccount);

    if (currentAccount?.pin === Number(pinInputRef.current.value)) {
      setlabaleWelcome(currentAccount.owner.split(" ")[0]);
    }
  };

  // handle transfer
  const inputTranferTo = useRef();
  const inputTranferAmount = useRef();
  const handleTransferclick = (e) => {
    e.preventDefault();
    const amount = Number(inputTranferAmount.current.value);
    const reciverAacc = accounts.find(
      (acc) => acc.username === inputTranferTo.current.value
    );
    inputTranferAmount.current.value = inputTranferTo.current.value = "";

    if (
      amount > 0 &&
      reciverAacc &&
      currentAccount.blance >= amount &&
      reciverAacc.username !== currentAccount.username
    ) {
      // doing the transfer
      currentAccount.movements.push(-amount);
      reciverAacc.movements.push(amount);
    }
  };

  // handle amount click
  const amountRef = useRef();

  const handleBtnLoan = (e) => {
    e.preventDefault();

    const amount = Number(amountRef.current.value);

    if (
      amount > 0 &&
      currentAccount.movements.some((mov) => mov >= amount * 0.1)
    ) {
      // add movment
      currentAccount.movements.push(amount);
    }
  };

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
        .split(" ")
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

  // handle Submit evenet handler
  const [usernamehome, setUsernamehome] = useState("");
  const [pinhome, setPinHome] = useState();
  const [lableWelcome, setlableWelcome] = useState();
  const [displayMovements, setdisplayMovements] = useState();
  const [ccaDisplayBalance, setccaDisplayBalance] = useState();
  const [ccaDisplaySummery, setccaDisplaySummery] = useState();
  let currentAccount;
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernamehome(e.target.username.value);
    setPinHome(e.target.pin.value);
    currentAccount = accounts.find((acc) => acc.username === usernamehome);

    if (currentAccount?.pin === Number(pinhome)) {
      console.log("LOGIN");

      //  display ui and message
      setlableWelcome(`Welcome back , ${currentAccount.owner.split(" ")[0]}`);

      // display movements
      setdisplayMovements(currentAccount.movements);
      // dsiplay balance
      setccaDisplayBalance(currentAccount.movements);
      // display summary
      setccaDisplaySummery(currentAccount.movements);
    }
  };

  return (
    <div>
      {/* header */}
      <div className="flex justify-between items-center px-8 py-10">
        <div className="font-semibold">{lableWelcome}</div>
        <img
          className="h-20"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Bank_Melli_Iran_New_Logo.png"
        />
        <div>
          <div>
            <form className="gap-2 flex" onSubmit={(e) => handleSubmit(e)}>
              <input
<<<<<<< HEAD
                ref={userNameInputRef}
=======
>>>>>>> f6e3db0e0a964ca9354a927d51fff93274aca88f
                name="username"
                placeholder="user"
                className="bg-gray-200 rounded-full w-20 p-2"
              ></input>
              <input
<<<<<<< HEAD
                ref={pinInputRef}
=======
>>>>>>> f6e3db0e0a964ca9354a927d51fff93274aca88f
                name="pin"
                placeholder="pin"
                className="bg-gray-200 rounded-full w-20 p-2"
              ></input>
              <button onClick={(e) => handleClickLogin(e)} type="submit">
                {" "}
                send
              </button>
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
          <h1 className="text-3xl">{ccaDisplayBalance} $</h1>
        </div>
      </div>
      <div className="flex  px-52 md:px-30  h-full">
        {/* table */}
        <Table />
        {/* column */}
        <div className="max-w-5xl w-full flex flex-col  gap-4 px-20 ">
          <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-400 to-yellow-700  rounded-md">
            <div className="p-10 gap-3 flex flex-col">
              <h1 className="font-bold">Transfer money</h1>
              <form className="flex  gap-3">
                <div className="flex flex-col justify-center items-center gap-2">
                  <input
                    ref={inputTranferTo}
                    name="tranfer"
                    className="bg-yellow-200 rounded-lg focus:outline-none  py-2"
                    id="transferto"
                  ></input>
                  <label htmlFor="transferto">Transfer to</label>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <input
                    ref={inputTranferAmount}
                    name="amount"
                    className="bg-yellow-200 rounded-lg focus:outline-none  py-2"
                    id="transferto"
                  ></input>
                  <label htmlFor="transferto">Amount</label>
                </div>
                <button
                  onClick={(e) => handleTransferclick(e)}
                  type="submit"
                  className="bg-white h-10 rounded-lg p-2"
                >
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
                    ref={amountRef}
                    className="bg-green-200 rounded-lg focus:outline-none  py-2"
                    id="transferto"
                  ></input>
                  <label htmlFor="transferto">Amount</label>
                </div>

                <button
                  onClick={(e) => handleBtnLoan(e)}
                  type="submit"
                  className="bg-white h-10 rounded-lg p-2"
                >
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
