"use client";
import { v4 as uuidV4 } from "uuid";
import { beerApi } from "lib/beer";
import { useRouter } from "next/navigation";
import React, { InputHTMLAttributes,MouseEvent } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  stylebeer: string;
  minTemperature:number;
  maxTemperature:number;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
}

const AddTodoButton = ({ onClick,type,stylebeer,minTemperature,maxTemperature, ...props }: InputProps)  => {
  const router = useRouter();

  const handleAddBeer = async () => {
    await beerApi.create({
      stylebeer: stylebeer,
      mintemperature: minTemperature ,
      maxtemperature: maxTemperature
    });
    router.refresh();

    toast.success('Cerveja criada com sucesso!');
  };


  return (
    <button
      className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      type="submit"
    >
      Enviar
    </button>
  );
};

export default AddTodoButton;
