import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import TodoItems from "./TodoItems";

function Todo() {
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-137.5 rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <FaRegBookmark className="w-8" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-16 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg cursor-pointer font-medium">
          ADD +
        </button>
      </div>
      <div>
        <TodoItems text="Learn Coding" />
        <TodoItems text="Learn English" />
      </div>
    </div>
  );
}

export default Todo;
