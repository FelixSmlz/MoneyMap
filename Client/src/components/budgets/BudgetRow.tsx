import { Link } from "react-router-dom";
import { BudgetType } from "../../pages/Budget";
import CategoryIcon from "../CategoryIcon";
import BudgetIndicator from "./BudgetIndicator";

const BudgetRow = ({
  id,
  name,
  limit,
  period,
  current_amount,
  category_id,
}: BudgetType) => {
  return (
    <Link
      to={`/budgets/${id}`}
      className="group flex w-full items-center bg-white hover:bg-bg_black rounded-[15px] p-4 gap-5"
    >
      <CategoryIcon className="bg-gray-100" category_id={category_id} />
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-bg_black group-hover:text-white text-base">
            {name}
          </h3>
          <p className="text-light_gray group-hover:text-white text-xs">
            {period}
          </p>
        </div>
        <BudgetIndicator
          maxWidth="140px"
          currentAmount={current_amount}
          limit={limit}
        />
      </div>
    </Link>
  );
};

export default BudgetRow;
