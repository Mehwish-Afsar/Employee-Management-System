import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ data }) => {
    const [userData, setUserData] = useContext(AuthContext);

    const updateTaskStatus = (status) => {
        const updatedData = [...userData]
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
        const user = updatedData.find((e) => e.email === loggedInUser.data.email)
        const task = user.tasks.find((t) => t.taskTitle === data.taskTitle)

        if (status === 'completed') {
            task.completed = true;
            task.active = false;
            user.taskCount.completed += 1;

        } else if (status === 'failed') {
            task.failed = true;
            task.newTask = false;
            task.active = false;
            user.taskCount.failed += 1;
        }
        user.taskCount.active -= 1;
        setUserData(updatedData);
    };

    return (
        <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5">
            <div className="flex items-center justify-between">
                <h3 className="bg-red-700 text-sm font-semibold py-1 rounded-lg px-3">{data.category}</h3>
                <h4 className="text-sm font-semibold">{data.taskDate}</h4>
            </div>
            <h1 className="mt-5 text-2xl font-semibold ">{data.taskTitle}</h1>
            <p className="text-sm mt-2">{data.taskDescription}</p>
            <div className="flex justify-between mt-8">
                <button
                    onClick={() => updateTaskStatus('completed')}
                    className="bg-green-500 py-1 px-2 text-sm rounded">
                    Mark as Completed
                </button>
                <button
                    onClick={() => updateTaskStatus('failed')}
                    className="bg-red-500 py-1 px-2 text-sm rounded">
                    Mark as Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptTask