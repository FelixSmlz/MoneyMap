import Background from "../components/Background";
import Nav from "../components/Nav";
import AddMenu from "../components/AddMenu";
import {
  getTransactions,
  getBudgets,
  getGoals,
  getCategories,
} from "../utils/api";
import FilterableHistoryTable from "../components/FilterableHistoryTable";
import { useState, useEffect, createContext } from "react";

export type DataType = "transactions" | "categories" | "budgets" | "goals";

export const TransactionContext = createContext<any>({
  data: [],
  dataType: "transactions",
});

function History() {
  const [dataType, setDataType] = useState<DataType>("transactions");
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let response;
      switch (dataType) {
        case "transactions":
          response = await getTransactions();
          break;
        case "budgets":
          response = await getBudgets();
          break;
        case "goals":
          response = await getGoals();
          break;
        case "categories":
          response = await getCategories();
          break;
        default:
          response = [];
      }
      setData(response || []);
    };

    fetchData();
  }, [dataType]);

  return (
    <div className="px-5 py-10 position-relative">
      <Background />
      <header className="flex items-center justify-between">
        <div className="text-bg_black flex items-center gap-2 bg-transparent text-lg font-medium">
          <select
            className="bg-transparent w-full max-w-fit appearance-none"
            name="data_type"
            id="data_type"
            style={{ width: "100%" }}
            onChange={(e) => {
              setDataType(e.target.value as DataType);
              e.target.style.width = e.target.value.length + "ch";
            }}
          >
            <option value="transactions">Transactions</option>
            <option value="budgets">Budgets</option>
            <option value="goals">Goals</option>
            <option value="categories">Categories</option>
          </select>
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.99968 2L5.67421 5.67454C6.10816 6.10849 6.81827 6.10849 7.25222 5.67454L10.9268 2"
              stroke="#1A1B1C"
              strokeWidth="2.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center gap-2">
          <a
            className="group bg-white hover:bg-bg_black p-2 rounded-full"
            href="/notifications"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:stroke-white"
                d="M5.3999 2.1001H18.5999C19.6999 2.1001 20.5999 3.0001 20.5999 4.1001V6.3001C20.5999 7.1001 20.0999 8.1001 19.5999 8.6001L15.2999 12.4001C14.6999 12.9001 14.2999 13.9001 14.2999 14.7001V19.0001C14.2999 19.6001 13.8999 20.4001 13.3999 20.7001L11.9999 21.6001C10.6999 22.4001 8.8999 21.5001 8.8999 19.9001V14.6001C8.8999 13.9001 8.4999 13.0001 8.0999 12.5001L4.2999 8.5001C3.7999 8.0001 3.3999 7.1001 3.3999 6.5001V4.2001C3.3999 3.0001 4.2999 2.1001 5.3999 2.1001Z"
                stroke="#1A1B1C"
                strokeWidth="1.75"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="group-hover:stroke-white"
                d="M10.93 2.1001L6 10.0001"
                stroke="#1A1B1C"
                strokeWidth="1.75"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </header>
      <TransactionContext.Provider value={{ data, dataType }}>
        <FilterableHistoryTable />
      </TransactionContext.Provider>
      <Nav />
      <AddMenu />
    </div>
  );
}

export default History;
