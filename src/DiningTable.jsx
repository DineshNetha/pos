import React from "react";
import { GrUpdate } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const TableData = [
  { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
];

const TableColours = [
  {
    colourName: '#0000000D',
    representingName: 'Blank Table',
  },
  {
    colourName: '#BFF1F9',
    representingName: 'Running Table',
  },
  {
    colourName: '#A3F7D1',
    representingName: 'Printed Table',
  },
  {
    colourName: '#F5F2B3',
    representingName: 'Paid Table',
  },
  {
    colourName: '#FFB6C1',
    representingName: 'Running KOT Table',
  },
];

const DiningTable = () => {
  return (
    <div className="px-4 py-7">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-[17px]">Table View</div>
        <div className="flex items-center gap-x-[8px]">
          <GrUpdate className="text-[23px] cursor-pointer mr-1" />
          <button className="text-white bg-[#e40039de] font-bold rounded-[4px] px-3 py-2">
            Delivery
          </button>
          <button className="text-white bg-[#e40039de] font-bold rounded-[4px] px-3 py-2">
            Pick Up
          </button>
          <button className="text-white flex justify-center items-center bg-[#e40039de] font-bold rounded-[4px] px-3 py-2">
            <MdAdd className="text-[21px]" />
            Add Table
          </button>
        </div>
      </div>
      <div className="h-[1px] mb-1 mt-7 bg-black opacity-[9%] w-full"></div>
      <div className="flex justify-between items-center">
        <div className="mt-6 mx-6 flex items-center gap-x-4">
          <button className="text-white flex justify-center items-center bg-[#e40039de] font-bold rounded-[4px] px-3 py-2">
            <MdAdd className="text-[21px]" />
            Table Reservation
          </button>
          <button className="text-white flex justify-center items-center bg-[#e40039de] font-bold rounded-[4px] px-3 py-2">
            <MdAdd className="text-[21px]" />
            Contactless
          </button>
        </div>
        <div className="flex items-center gap-x-4">
          {TableColours.map((colour, index) => {
            return (
              <div key={index} className="flex items-center gap-x-[5px] text-[16px]">
                <div
                  style={{ backgroundColor: colour.colourName }}
                  className="w-[16px] h-[16px] rounded-full"
                ></div>
                {colour.representingName}
              </div>
            );
          })}
        </div>
      </div>
      {["Ground Floor", "First Floor", "Second Floor"].map((floor, floorIndex) => (
        <div key={floorIndex} className="mt-6">
          <div className="text-[17px] text-[#e40039de]">{floor}</div>
          <div className="mt-3 px-3">
            <Link to="/tablefoodorder">
              <div className="flex items-center ">
                {TableData[0].data.map((table, index) => {
                  return (
                    <Link
                    key={index}
                    to={`/tablefoodorder/${table}`}  
                  >
                    <div
                      onClick={() => setSelectedTable(table)}  
                      className="flex justify-center cursor-pointer items-center mr-6 w-[80px] border-2 border-dotted rounded-lg h-[80px] border-black border-opacity-25 bg-[#0000000D]"
                    >
                      {table}
                    </div>
                  </Link>
                  );
                })}
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiningTable;
