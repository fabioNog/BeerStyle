"use client";
import { v4 as uuidV4 } from "uuid";
import { taskApi } from "lib/task";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlus } from "react-icons/fa";

const AddTodoButton: React.FC = () => {
  const router = useRouter();

  const handleAddBeer = async () => {
    await beerApi.create({
      style: style,
      mintemperature: minTemperature ,
      maxtemperature: maxTemperature
    });
    router.refresh();
  };

  const handleAddTask = async () => {
    await taskApi.create({
      style: "",
      done: true,
      mintemperature: 0,
      maxtemperature: 0,
    });
    router.refresh();
  };

  return (
    <button
      className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      type="button"
      onClick={handleAddBeer}
    >
      Enviar
    </button>
  );
};

export default AddTodoButton;
