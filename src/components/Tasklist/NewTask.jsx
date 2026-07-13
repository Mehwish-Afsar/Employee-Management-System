import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ data }) => {
    const [userData, setUserData] = useContext(AuthContext);

    const handleAcceptTask = () => {
        const updatedData = [...userData];
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

        const user = updatedData.find((e) => e.email === loggedInUser.data.email);
        const task = user.tasks.find((t) => t.taskTitle === data.taskTitle);

        task.active = true;
        task.newTask = false;

        user.taskCount.active += 1;
        user.taskCount.newTask -= 1;

        setUserData(updatedData);
    };

    return (
        <div className="flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5">
            <div className="flex items-center justify-between">
                <h3 className="bg-red-700 text-sm font-semibold py-1 rounded-lg px-3">{data.category}</h3>
                <h4 className="text-sm font-semibold">{data.taskDate}</h4>
            </div>
            <h1 className="mt-5 text-2xl font-semibold ">{data.taskTitle}</h1>
            <p className="text-sm mt-2">{data.taskDescription}</p>
            <div className="mt-8">
                <button onClick={handleAcceptTask} className="bg-blue-500 py-1 px-2 text-sm rounded">Accept Task</button>
            </div>
        </div>
    )
}
export default NewTask