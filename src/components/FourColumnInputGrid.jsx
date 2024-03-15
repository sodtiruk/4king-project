import React, { useEffect, useState } from 'react';
import CardInformation from './CardInformation';

const InputCard = ({ title, school }) => {

  const [dataSchool, setDataSchool] = useState([]);

  useEffect(() => {
    const handleStorageChange = () => {
      let newData = [];
      // if (school === "prachachuen") {
      //   newData = JSON.parse(sessionStorage.getItem('prachachuen')) || [];
      // } else if (school === "intrara") {
      //   newData = JSON.parse(sessionStorage.getItem('intrara')) || [];
      // } else if (school === "kanok") {
      //   newData = JSON.parse(sessionStorage.getItem('kanok')) || [];
      // } else if (school === "buranaphon") {
      //   newData = JSON.parse(sessionStorage.getItem('buranaphon')) || [];
      // }
      newData = JSON.parse(sessionStorage.getItem(school)) || []

      setDataSchool(newData);
    };

      window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [school]); // เพิ่ม school เป็น dependency เพื่อให้ useEffect เรียกใช้ handleStorageChange เมื่อ school เปลี่ยน


  if (!dataSchool || dataSchool.length === 0) {
    return null;
  }

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


      {dataSchool.map((value, index) => (
        <div className='mt-5' key={index}>
          <CardInformation value={value} />
        </div>
      ))}

    </div>
  );
};

const FourColumnInputGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <InputCard title="ประชาชื่น" school="prachachuen" />
      <InputCard title="อินทร" school="intrara" />
      <InputCard title="กนกอาชีวะ" school="kanok" />
      <InputCard title="บูรณพล" school="buranaphon" />
    </div>
  );
};

export default FourColumnInputGrid;