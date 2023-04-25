import Table from "./pages/Table";
import Column from "./pages/Column";
import Footer from "./pages/Footer";

function App() {
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

  return (
    <>
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
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
