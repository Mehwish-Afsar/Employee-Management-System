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
        <div className="flex h-full w-[280px] flex-shrink-0 flex-col rounded-2xl border border-white/10 border-l-4 border-l-indigo-400 bg-[#12151B] p-5">
            <div className="flex items-center justify-between">
                <span className="rounded-full bg-indigo-400/10 px-2.5 py-1 text-[11px] font-semibold text-indigo-400">
                    {data.category}
                </span>
                <span className="text-xs text-white/40">{data.taskDate}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{data.taskTitle}</h3>
            <p className="mt-2 flex-1 text-sm text-white/50">{data.taskDescription}</p>
            <button
                onClick={handleAcceptTask}
                className="mt-5 w-full rounded-lg bg-indigo-400/15 py-2 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-400/25"
            >
                Accept task
            </button>
        </div>
    );
};

export default NewTask;