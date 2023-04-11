import React from 'react';

interface Props {
  name: string;
  value?: string;
  
}

const onChange = (e){
    console.log(e);
}

const Input: React.FC<Props> = () => {
  return (
    <input
      type='text'
      value=""
      autoComplete='off'
      onChange={(e) => onChange(e.target.value)}
      className='w-full p-1 outline-none focus:outline-[#0b9219] rounded bg-transparent disabled:line-through disabled:text-gray-400'
    />
  );
};

export default Input;
