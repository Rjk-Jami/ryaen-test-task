import React from 'react'

const Proggress = () => {
  return (
    <div className="w-full p-4 bg-gray-800 rounded-2xl shadow-md">
  <div className="flex justify-between items-center">
    <div className="flex items-center space-x-2">
      <div className="bg-yellow-500 rounded-full text-white text-sm font-bold w-6 h-6 flex items-center justify-center">1</div>
      <span className="text-white font-medium">Child progress</span>
    </div>
    <select className="select select-ghost select-sm bg-transparent text-white">
      <option>Weekly</option>
      <option>Monthly</option>
      <option>Yearly</option>
    </select>
  </div>
  <div className="mt-4">
    <p className="text-gray-300">Task Completed</p>
    <div className="flex justify-between items-center">
      <span className="text-2xl font-semibold text-white">81%</span>
    </div>
    <progress className="progress progress-primary w-full mt-2" value="81" max="100"></progress>
  </div>
</div>

  )
}

export default Proggress
