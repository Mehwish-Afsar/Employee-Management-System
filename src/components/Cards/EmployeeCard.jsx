import React from "react";

const EmployeeCard = ({data}) => {
    return (
        <div className="flex items-center justify-between mt-10">
            <div className="w-[24%] bg-blue-400 rounded-xl p-6">
                <h1 className="text-5xl font-bold">{data.taskCount.newTask}</h1>
                <h1 className="text-xl font-bold">New Task</h1>
            </div>
            <div className="w-[24%] h-[30%] bg-green-400 rounded-xl p-6">
                <h1 className="text-5xl font-bold">{data.taskCount.completed}</h1>
                <h1 className="text-xl font-bold">Completed</h1>
            </div>
            <div className="w-[24%] h-[30%] bg-yellow-400 rounded-xl p-6">
                <h1 className="text-5xl font-bold">{data.taskCount.active}</h1>
                <h1 className="text-xl font-bold">Accepted</h1>
            </div>
            <div className="w-[24%] h-[30%] bg-orange-400 rounded-xl p-6">
                <h1 className="text-5xl font-bold">{data.taskCount.failed}</h1>
                <h1 className="text-xl font-bold">Failed</h1>
            </div>

        </div>

    )
}

export default EmployeeCard