"use client";
import { useState } from "react";
import {
  FaBook,
  FaCalculator,
  FaFileAlt,
  FaClipboardList,
} from "react-icons/fa";

import { IoIosArrowBack } from "react-icons/io";
const tasksData = [
  {
    id: 1,
    title: "Science Lab Report",
    description: "Write a lab report for the experiment.",
    coins: 1,
    date: "12-02",
    time: "2:32 PM",
    status: "pending",
    complete: true,
    icon: <FaFileAlt />,
  },
  {
    id: 2,
    title: "Math Problems",
    description: "Solve algebra problems 1-5",
    coins: 3,
    date: "12-02",
    time: "11:59 PM",
    status: "pending",
    complete: true,
    icon: <FaCalculator />,
  },
  {
    id: 3,
    title: "Vocabulary Quiz",
    description: "Study and take the quiz.",
    coins: 2,
    date: "12-02",
    time: "11:59 PM",
    status: "pending",
    complete: true,
    icon: <FaBook />,
  },
  {
    id: 4,
    title: "Science Lab Report",
    description: "Write a lab report for the experiment.",
    coins: 1,
    date: "12-02",
    time: "2:32 PM",
    status: "overdue",
    complete: true,
    icon: <FaFileAlt />,
  },
  {
    id: 5,
    title: "Math Problems",
    description: "Solve algebra problems 1-5",
    coins: 3,
    date: "12-02",
    time: "2:32 PM",
    status: "completed",
    complete: false,
    icon: <FaCalculator />,
  },
  {
    id: 6,
    title: "Vocabulary Quiz",
    description: "Study and take the quiz.",
    coins: 2,
    date: "12-02",
    time: "2:32 PM",
    status: "completed",
    complete: false,
    icon: <FaBook />,
  },
];

const detailedTask = {
  title: "Write an Essay",
  description: "Write a 500-word essay on the topic of climate change.",
  instructions: [
    "Use 12-point Times New Roman font",
    "Double-space your essay",
    "Save your essay as a PDF or Word document",
  ],
  action: "Start the task",
  icon: <FaClipboardList />,
};

const TaskList = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const toggleTaskDetails = (taskId) => {
    setSelectedTask(selectedTask === taskId ? null : taskId);
  };
  return (
    <div className="p-6 w-full mx-auto space-y-4">
      {/* If a task is selected, show complete */}
      {
        // Show task list if no task is selected
        tasksData.map((task, index) => (
          <div key={index} className="">
            <div className="border-2 text-white p-4 rounded-lg shadow-md flex  gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg bg-white btn-circle flex items-center border justify-center">
                    <div className="text-black">{task.icon}</div>
                  </span>
                  <div className="flex flex-col ">
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <p className="text-gray-400 truncate w-full max-w-[150px]">
                      {task.description}
                    </p>
                  </div>
                </div>
              </div>

              {task.coins && (
                <div className="flex items-center gap-1 text-yellow-400 mt-2">
                  🪙{" "}
                  <span>
                    {task.coins} coin{task.coins > 1 ? "s" : ""}
                  </span>
                </div>
              )}

              {task.date && task.time && (
                <div className="text-gray-400 flex items-center gap-1 text-sm mt-2">
                  📅{" "}
                  <div className="flex flex-col items-center">
                    <div className=" ">{task.date}</div>
                    <div className="">{task.time}</div>
                  </div>
                </div>
              )}

              <div className="mx-auto">
                {task.complete ? (
                  <button
                    onClick={() => toggleTaskDetails(task.id)}
                    className="mt-2 px-4 py-2 bg-white text-black rounded  transition"
                  >
                    details
                  </button>
                ) : (
                  <button className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition">
                    complete
                  </button>
                )}
              </div>
            </div>

            <div className="mt-4">
              
                {selectedTask === task.id && (
                  <div className="border-2 rounded-lg">
                    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
                      <button
                        onClick={() => setSelectedTask(null)}
                        className="flex items-center gap-1 text-blue-400 hover:underline mb-4"
                      >
                        <IoIosArrowBack /> Back
                      </button>
                      <div className="flex items-center gap-2 text-xl">
                        {detailedTask.icon}
                        <h3 className="font-semibold">{detailedTask.title}</h3>
                      </div>
                      <p className="text-gray-400 mt-2">
                        {detailedTask.description}
                      </p>
                      <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                        {detailedTask.instructions.map((instruction, index) => (
                          <li key={index}>{instruction}</li>
                        ))}
                      </ul>
                      <button className="mt-4 px-4 py-2 bg-blue-500 rounded w-full hover:bg-blue-400 transition">
                        {detailedTask.action}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
         
        ))
      }
    </div>
  );
};

export default TaskList;
