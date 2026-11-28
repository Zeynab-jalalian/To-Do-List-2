import React from "react";
import { FaCheck, FaTrash, FaTimes } from "react-icons/fa";

const TodoItems = ({ text }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <FaCheck className="w-7" />
        <p className="text-slate-700 ml-4 text-[17px">{text}</p>
      </div>

      <FaTrash className="w-3.5 cursor-pointer" />
    </div>
  );
};

export default TodoItems;
