import React, { useEffect, useState } from 'react';
import CardInformation from './CardInformation';

const InputCard = ({ title, school }) => {

  const [dataSchool, setDataSchool] = useState([]);

  useEffect(() => {
    const handleStorageChange = () => {
      let newData = [];
      
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

  const handleOnDrag = (e, value) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(value));
  };

  const handleOnDrop = (e) => {
    const value = JSON.parse(e.dataTransfer.getData("text/plain"));
    // ทำสิ่งที่ต้องการเมื่อลากและวาง CardInformation ไปยังแต่ละคอลัมน์
    setDataSchool([...dataSchool, value]);
  
    // อัปเดตข้อมูลของคอลัมน์ที่เพิ่มข้อมูลเข้าไปใหม่ใน sessionStorage
    const newDataSchool = JSON.parse(sessionStorage.getItem(school)) || [];
    newDataSchool.push(value);
    sessionStorage.setItem(school, JSON.stringify(newDataSchool));
    console.log("value ==>", value);

  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDragEnd = (e, index) => {
  // ทำสิ่งที่ต้องการเมื่อลากและวาง CardInformation ลงมาแล้วลบข้อมูลเก่าออก
    const newDataSchool = dataSchool.filter((_, i) => i !== index); //ข้อมูลก่อนออกแต่ละ column
    setDataSchool(newDataSchool);

    // อัพเดตข้อมูลเฉพาะ column sessionStorage เก่า
    console.log("new data School =>", newDataSchool);
    sessionStorage.setItem(school, JSON.stringify(newDataSchool));
    
  };

  console.log("data school ===>", dataSchool)

  return (
    <div className="rounded-lg shadow-md p-4 mb-4 bg-gray-900 text-red-700" onDrop={handleOnDrop} onDragOver={handleDragOver}>
      <div className="flex justify-center">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
      </div>
      <input
        type="text"
        className="border rounded-md w-full p-2 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter your text here..."
      />


      {dataSchool.map((value, index) => (
        <div className='mt-5' key={index} draggable={true} onDragStart={(e) => handleOnDrag(e, value)} onDragEnd={(e) => handleOnDragEnd(e, index)}>
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