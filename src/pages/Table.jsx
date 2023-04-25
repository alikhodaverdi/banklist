import React, { useMemo } from "react";

// Data
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

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const containerMovements = document.querySelector(".movements");

// const displayMovements = function (movements) {
//   movements.forEach(function (mov, i) {
//     const type = mov > 0 ? "deposit" : "withdrawal";

//     const tr = `
//     <tr>
//     <td className="border">
//       <div className=" ${
//         type === "deposit" ? "bg-green-400" : "bg-red-400"
//       } text-white text-center rounded-lg w-20">
//       ${type} ${i + 1}
//       </div>
//     </td>
//     <td className="border">${mov}$</td>
//   </tr>
//     `;
//     containerMovements?.insertAdjacentHTML("afterbegin", tr);
//   });
// };

const eurToUsd = 1.1;
const movementsUSD = movements.map((mov) => mov * eurToUsd);

// create username
const createUsernames = (accs) => {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsernames(accounts);

// filter
const deposit = movements.filter((mov) => mov > 0);
const withdrawal = movements.filter((mov) => mov < 0);

// reduce
const balance = movements.reduce((mov) => {});

const Table = () => {
  return (
    <div className="w-full">
      <table className=" w-full bg-white rounded-md drop-shadow-md overflow-y-scroll">
        {movements.map((item, key) => (
          <tr
            key={key}
            className=" hover:scale-105 hover:cursor-pointer transition-all hover:bg-gray-400 hover:text-white"
          >
            <td className="border-b p-2">
              <div
                className={` ${
                  item > 0 ? "bg-green-400" : "bg-red-400 w-24"
                }  text-white text-center rounded-lg w-20`}
              >
                {item > 0 ? "deposit" : "withdrawal"}
              </div>
            </td>
            <td className="border-b"> {item}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
