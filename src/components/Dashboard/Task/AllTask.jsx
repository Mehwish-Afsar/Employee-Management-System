import React, { useContext } from "react";
import AuthProvider, { AuthContext } from "../../../context/AuthProvider";


const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    return (
        <div id="tasklist" className="bg-[#1C1C1C] p-5 mt-5 h-60 rounded">
            <div className="bg-emerald-900 mb-2 py-2 px-4 flex justify-between rounded">
                <h3 className="w-1/5 text-lg font-medium">Employee Name</h3>
                <h2 className="w-1/5 text-lg font-medium">New Task</h2>
                <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
                <h5 className="w-1/5 text-lg font-medium">Completed</h5>
                <h5 className="w-1/5 text-lg font-medium">Failed</h5>
            </div>
            <div id="tasklist" className="h-[80%] overflow-auto ">
                {userData.map((elem, idx) => {
                    return (
                        <div key={idx} className="bg-emerald-400 mb-2 py-2 px-4 flex justify-between rounded">
                            <h2 className="text-lg font-medium  w-1/5 ">{elem.firstName}</h2>
                            <h3 className="text-lg font-medium w-1/5 text-blue-600">{elem.taskCount.newTask}</h3>
                            <h5 className="text-lg font-medium w-1/5 text-yellow-600">{elem.taskCount.active}</h5>
                            <h5 className="text-lg font-medium w-1/5 text-green-600">{elem.taskCount.completed}</h5>
                            <h5 className="text-lg font-medium w-1/5 text-red-600">{elem.taskCount.failed}</h5>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}
export default AllTask