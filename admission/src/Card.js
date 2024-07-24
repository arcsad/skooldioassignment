import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import icon from "./icon.svg";
import fix from "./fix.svg";
import "./Card.css";
const Card = ({data}) => {
  
  const {
    logo,
    roundSeats,
    score,
  } = data;
  const minScore = score ? score.min : 'N/A';
  const avgScore = score ? score.avg : 'N/A';
  const maxScore = score ? score.max : 'N/A';

  return (
    <div className="w-[442px] h-[440px] border rounded-lg p-4 shadow-lg m-5">
      <div className="flex  mb-7">
        <img src={logo} alt="Logo" className="w-[80px] h-[86px] mr-2 " />
        <div className="flex-grow text-red-500 font-semibold text-2xl ">
          {data.name}
          <div className="text-gray-500 text-xl mb-[20px] font-medium">
          {data.faculty.name}
          </div>
          <div className="text-gray-400 text-xl w-[217.2px] h-[16px]  font-light ">
          {data.faculty.university.name}
          </div>
        </div>
        <button className=" text-white  w-6 h-5 mt-1">
          <FontAwesomeIcon icon={faHeart} style={{ color: "#ef4444" }} />{" "}
        </button>{" "}
      </div>
      <div className="w-full h-px bg-gray-300 my-4"></div>

      <div className="flex justify-between  items-center mb-2">
        <div className="text-xl font-light	text-gray-500 font-bold">
          รอบที่เปิด
        </div>
        <div className="flex mr-28 ">
          {roundSeats.map((num, index) => (
            <div
              key={num}
              className={`w-8 h-8 flex items-center justify-center rounded-full m-1 ${
                num > 0
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-white"
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between  items-center mb-2">
        <div className="text-red-500 mb-2 ">รอบที่ 4: Admission</div>
      
        <div class="w-[120px] h-[35px]  p-2 rounded-full border border-red-500 ">
        <div className="flex justify-between  items-center mb-2 ml-2">
        <div className="text-xs	  font-medium text-red-500">แก้ไขคะแนน</div>
        <img src={fix} alt="Logo" className="w-[18px] h-[18px] mr-2 " /></div>
        </div>
      </div>
      <div className="flex justify-between  items-center mb-2">
        <img src={icon} alt="Logo" className="w-[27px] h-[35px] ml-[34px]" />
        <div className="grid justify-items-end  mb-2">
          <div className="font-light text-xs text-gray-500">คะแนนของคุณคือ</div>
          <div className="text-4xl  font-light text-gray-700">23,453</div>
        </div>
      </div>
      <div className="flex justify-between mt-[14px]">
        <div className="text-center">
          <div className="text-gray-500 text-xl font-light">{minScore}</div>
          <div className="text-gray-500 text-xs font-light">คะแนนต่ำสุด 60</div>
        </div>
        <div class="border-l-2 h-7 mt-2"></div>
        <div className="text-center">
          <div className="text-gray-500 text-xl font-light">{avgScore}</div>
          <div className="text-gray-500 text-xs font-light">คะแนนเฉลี่ย 60</div>
        </div>
        <div class="border-l-2 b h-7 mt-2"></div>
        <div className="text-center">
          <div className="text-gray-500 text-xl font-light">{maxScore}</div>
          <div className="text-gray-500 text-xs font-light">คะแนนสูงสุด 60</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
