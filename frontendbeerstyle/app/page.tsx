"use client";
import React, { useCallback, useState } from "react";
import AddTodoButton from "components/AddTodoButton";
import TaskItem from "components/TaskItem";
import Input from "components/Input";
import { beerApi } from 'lib/beer';
import { FaPlus } from 'react-icons/fa';
import { useRouter } from "next/navigation";


interface InputProps {
  label: string;
}

const Home: React.FC<InputProps> = () => {
  const [style, setStyle] = useState<string>("");
  const [minTemperature, setminTemperature] = useState<number>(0);
  const [maxTemperature, setMaxTemperature] = useState<number>(0);
  const router = useRouter();

  const handleStyleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStyle(event.target.value);
    console.log(style);
  };

  const handleMinTemperatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const minTemp = Number(event.target.value);
    setminTemperature(minTemp);
    console.log(minTemperature);
  };

  const handleMaxTemperatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maxTemp = Number(event.target.value);
    setMaxTemperature(maxTemp);
    console.log(maxTemperature);
  };

  const handleAddBeer = async () => {
    await beerApi.create({
      style: style,
      mintemperature: minTemperature ,
      maxtemperature: maxTemperature
    });
    router.refresh();
  };

  return (
    <div
      className="absolute inset-0 w-full h-max 
    max-h-full overflow-auto rounded bg-black/10 dark:bg-white/5"
    >
      <div className="flex bg-white dark:bg-[#1c1c1c] p-2 mb-2 last:mb-0 rounded cursor-pointer">
        <form className="flex-1 flex flex-col space-y-4">
          <label htmlFor="input1">Estilo da Cerveja</label>
          <Input id="input1" type="text" onChange={handleStyleChange}/>
          <Input id="input2" type="number" onChange={handleMinTemperatureChange}/>
          <Input id="input3" type="number" onChange={handleMaxTemperatureChange}/>

          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            type="button"
            onClick={handleAddBeer}
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
