import React from 'react';
import CardInformation from './CardInformation';

const InputCard = ({ title }) => {
  return (
    <div className="rounded-lg shadow-md p-4 mb-4 bg-gray-900 text-red-700">
        <div className="flex justify-center">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
        </div>
      <input
        type="text"
        className="border rounded-md w-full p-2 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter your text here..."
      />

    <div className='mt-5'>
      <CardInformation />
    </div>
    
    
   

    </div>
  );
};

const FourColumnInputGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <InputCard title="ประชาชื่น" />
      <InputCard title="อินทร" />
      <InputCard title="กนกอาชีวะ" />
      <InputCard title="บูรณพล" />
    </div>
  );
};

export default FourColumnInputGrid;