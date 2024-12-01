import React from 'react'

const TaskCounts = () => {
  return (
    <div className="info flex flex-wrap items-center gap-4 py-4">
    <div className="p-5 border rounded-xl w-fit">
             <p className="text-xl font-semibold">Tasks Completed</p>
             <p className="text-xl">2145</p>
           </div>
           <div className="p-5 border rounded-xl w-fit">
             <p className="text-xl font-semibold">Tasks Missed</p>
             <p className="text-xl">2145</p>
           </div>
           <div className="p-5 border rounded-xl w-fit">
             <p className="text-xl font-semibold">Forgot to answers</p>
             <p className="text-xl">2145</p>
           </div>
    </div>
  )
}

export default TaskCounts