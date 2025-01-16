import { useId, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  type: string;
  id: string;
  value?: string;
  placeholder?: string;
  className?: string;
  errorMsg: string | undefined;
  handler: UseFormRegisterReturn;
};

const Input = ({
  type,
  id,
  className,
  value,
  placeholder,
  handler,
  errorMsg,
}: Props) => {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    if (handler.onChange) {
      handler.onChange(e);
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <div className="relative">
        <input
          type={type}
          id={id}
          placeholder=" "
          autoComplete="off"
          value={inputValue || value}
          {...handler}
          onChange={handleChange}
          className={`${className} peer w-full focus:outline-bg_black focus:outline p-4 border border-light_gray rounded-[15px]`}
        />
        <label
          className={`absolute left-4 text-gray transform pointer-events-none rounded-[15px] transition-all duration-150 ${
            inputValue || value
              ? "-translate-y-3 scale-[0.8] bg-white px-1"
              : "translate-y-4 scale-100"
          } peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-[0.8] peer-focus:px-1 peer-focus:bg-white peer-focus:text-bg_black`}
          htmlFor={id}
        >
          {placeholder}
        </label>
      </div>
      {errorMsg && <small className="text-red">{errorMsg}</small>}
    </div>
  );
};

export default Input;
