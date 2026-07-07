import React from 'react'

const TABS = [
  { title: "Board View", icon: <MdGridVie /> },
  { title: "List View", icon: <FaList /> },
];

const TASK_TYPE = {
  todo: "bg-blue-600",
  "in progress": "bg-yellow-600",
  completed: "bg-green-600",
};


const Tasks = () => {

  return (
    <div>
        Tasks Page
    </div>
  )
}

export default Tasks
