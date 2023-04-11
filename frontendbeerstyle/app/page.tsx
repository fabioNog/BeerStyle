"use client";
import React, { useCallback, useState } from "react";
import AddTodoButton from "components/AddTodoButton";
import TaskItem from "components/TaskItem";
import InputStyle from "components/InputStyle";
import { taskApi } from "lib/task";

interface InputProps {
  label: string;
}

const Home: React.FC<InputProps> = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(value);
  };

  return (
    <div
      className="absolute inset-0 w-full h-max 
    max-h-full overflow-auto rounded bg-black/10 dark:bg-white/5"
    >
      <div className="flex bg-white dark:bg-[#1c1c1c] p-2 mb-2 last:mb-0 rounded cursor-pointer">
        <form className="flex-1 flex flex-col space-y-4">
          <label htmlFor="input1">Estilo da Cerveja</label>
          <input
            id="input1"
            type="text"
            onChange={handleChange}
            className="w-full"
          />
          <label htmlFor="input2">Temperatura Mínima:</label>
          <input
            id="input2"
            type="number"
            onChange={handleChange}
            className="w-full"
          />
          <label htmlFor="input2">Temperatura Maxima:</label>
          <input
            id="input2"
            type="number"
            onChange={handleChange}
            className="w-full"
          />
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            type="submit"
          >
            Enviar
          </button>

        </form>
      </div>
    </div>
  );
};

export default Home;

export const revalidate = 10;
