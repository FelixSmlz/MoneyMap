import { NavLink } from "react-router-dom";
import Background from "../components/Background";
import Logo from "../components/Logo";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center h-dvh px-5 py-10 position-relative">
      <Background />
      <div className="bg-white w-full max-w-[500px] 2xl:max-w-[700px] 2xl:p-[100px] rounded-[15px] shadow-md p-10 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <Logo />
          <p className="text-gray text-center max-w-[25ch]">
            Track your expenses and achieve your financial goals
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <NavLink
            to="/guest/login"
            className="bg-bg_black text-white hover:bg-white hover:text-bg_black border-2 border-bg_black rounded-[15px] p-3 text-center"
          >
            Login
          </NavLink>
          <NavLink
            to="/guest/register"
            className="bg-white text-bg_black hover:bg-bg_black hover:text-white border-2 border-bg_black rounded-[15px] p-3 text-center"
          >
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
