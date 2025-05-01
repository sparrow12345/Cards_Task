import React from 'react';
import { cardProps } from '@/types/cardProps';

const Card: React.FC<{ data: cardProps }> = ({ data: { title, text} }) => {
  return (
    <>
      {<div className="w-[200px] h-[200px] bg-white shadow rounded flex flex-col items-center justify-center text-center p-4">
          <div>
            <h3 className='text-black text-xl'>{title}</h3>
          </div>
          <div>
            <span className='text-sm text-black'>{text}</span>
          </div>
        </div>}
    </>
  );
}

export default Card;