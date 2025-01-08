import BarChartComponent from "./BarChart";

function Analytics() {
  return (
    <div className="bg-bg_black w-full p-6 rounded-[15px]">
      <div className="flex justify-between mb-4">
        <h3 className="text-white text-[0.9rem]">Analytics</h3>
        <div className="flex justify-between items-center">
          <select
            className="text-center appearance-none bg-transparent text-gray text-[0.75rem] font-medium rounded-full cursor-pointer focus:outline-none"
            name="cars"
            id="filter-by"
          >
            <option value="day">Today</option>
            <option value="week">This week</option>
            <option value="month">This month</option>
            <option value="year">This year</option>
          </select>
          <svg
            className="w-4 h-4 text-blue-300"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
              fill="#80D9FF"
            />
            <path
              d="M9 6.375V10.875"
              stroke="#1A1B1C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.75 9.375L9 11.625L11.25 9.375"
              stroke="#1A1B1C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <BarChartComponent />
    </div>
  );
}

export default Analytics;
