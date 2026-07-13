import React from "react";

const FailedTask = ({ data }) => {
    return (
        <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5">
            <div className="flex items-center justify-between">
                <h3 className="bg-red-700 text-sm font-semibold py-1 rounded-lg px-3">{data.category}</h3>
                <h4 className="text-sm font-semibold">{data.taskDate}</h4>
            </div>
            <h1 className="mt-5 text-2xl font-semibold ">{data.taskTitle}</h1>
            <p className="text-sm mt-2">{data.taskDescription}</p>
            <div className="mt-8">
                <button className="bg-red-500 py-1 px-2 text-sm rounded w-full">Failed</button>
            </div>
        </div>
    )
}

export default FailedTask