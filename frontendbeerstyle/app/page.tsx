"use client";
import React, { useCallback, useState } from "react";
import AddTodoButton from "components/AddTodoButton";
import TaskItem from "components/TaskItem";
import Input from "components/Input";
import { beerApi } from 'lib/beer';
import { FaPlus } from 'react-icons/fa';
import { useRouter } from "next/navigation";

interface InputProps {}

const Home: React.FC<InputProps> = () => {
  const [style, setStyle] = useState("");
  const [minTemperature, setMinTemperature] = useState(0);
  const [maxTemperature, setMaxTemperature] = useState(0);
  const router = useRouter();

  const handleStyleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setStyle(event.target.value);
    },
    []
  );

  const handleMinTemperatureChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMinTemperature(Number(event.target.value));
    },
    []
  );

  const handleMaxTemperatureChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMaxTemperature(Number(event.target.value));
    },
    []
  );

  const handleSubmit = useCallback(async () => {
    await beerApi.create({
      style: style,
      mintemperature: minTemperature,
      maxtemperature: maxTemperature
    });
  }, [style, minTemperature, maxTemperature]);

  return (
    <div
      className="absolute inset-0 w-full h-max 
    max-h-full overflow-auto rounded bg-black/10 dark:bg-white/5"
    >
      <div className="flex bg-white dark:bg-[#1c1c1c] p-2 mb-2 last:mb-0 rounded cursor-pointer">
        <form className="flex-1 flex flex-col space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="input1">Estilo da Cerveja</label>
          <Input id="input1" type="text" onChange={handleStyleChange} required />
          <Input id="input2" type="number" onChange={handleMinTemperatureChange} required />
          <Input id="input3" type="number" onChange={handleMaxTemperatureChange} required />

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