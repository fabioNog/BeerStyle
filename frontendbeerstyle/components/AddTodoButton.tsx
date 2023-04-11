'use client';
import { v4 as uuidV4 } from 'uuid';
import { taskApi } from 'lib/task';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddTodoButton: React.FC = () => {
  const router = useRouter();

  const handleAddTask = async () => {
    await taskApi.create({
      style: '',
      done: true,
      mintemperature: 0,
      maxtemperature: 0,
    });
    router.refresh();
  };

  

  return (

      <button
        type='button'
        data-modal-target="defaultModal" data-modal-toggle="defaultModal"
        onClick={handleAddTask}
        className='fixed right-5 bottom-5 grid place-items-center w-16 h-16 rounded-full bg-[#0b9219] text-white text-xl'>
        <FaPlus />
      </button>
  );
};

export default AddTodoButton;
