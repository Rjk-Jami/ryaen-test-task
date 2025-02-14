import Image from "next/image";
import styles from "./page.module.css";
import TaskList from "@/components/TaskList/TaskList";
import { IoIosArrowDown } from "react-icons/io";
import { FaAnglesRight } from "react-icons/fa6";
import Proggress from "@/components/Proggress/Proggress";
import Timer from "@/components/Timer/Timer";
import Play from "@/components/Play/Play";


export default function Home() {
  return (
    <div className="p-10 ">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-3">
        <div className="md:col-span-6 bg-gray-800 rounded-2xl p-4 " >
          <div className=" flex justify-between text-white  ">
            <div className=" ">
              <h1 className="text-2xl">Your tasks</h1>
            </div>
            <div className="flex justify-between gap-2">
              <div className="flex items-center gap-1">
                <IoIosArrowDown></IoIosArrowDown>
                <span>Filter</span>
              </div>
              <div className="">|</div>
              <div className="flex items-center gap-1">
                
                <span>All Task</span>
                <FaAnglesRight />

              </div>
            </div>
          </div>
          <div className=" ">
          <TaskList></TaskList>
          </div>
        </div>
        <div className="md:col-span-4 min-h-full flex flex-col   gap-3">
        <Proggress></Proggress>
        <Timer></Timer>
        <div className="flex-1">
        <Play></Play>
        </div>
      </div>
      </div>
      
    </div>
  );
}
