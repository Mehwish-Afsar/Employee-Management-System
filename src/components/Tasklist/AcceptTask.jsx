import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ data }) => {
    const [userData, setUserData] = useContext(AuthContext);

    const updateTaskStatus = (status) => {
        const updatedData = [...userData];
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        const user = updatedData.find((e) => e.email === loggedInUser.data.email);
        const task = user.tasks.find((t) => t.taskTitle === data.taskTitle);

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
        <div className="flex h-full w-[280px] flex-shrink-0 flex-col rounded-2xl border border-white/10 border-l-4 border-l-amber-400 bg-[#12151B] p-5">
            <div className="flex items-center justify-between">
                <span className="rounded-full bg-amber-400/10 px-2.5 py-1 text-[11px] font-semibold text-amber-400">
                    {data.category}
                </span>
                <span className="text-xs text-white/40">{data.taskDate}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{data.taskTitle}</h3>
            <p className="mt-2 flex-1 text-sm text-white/50">{data.taskDescription}</p>
            <div className="mt-5 flex gap-2">
                <button
                    onClick={() => updateTaskStatus('completed')}
                    className="flex-1 rounded-lg bg-emerald-400/15 py-2 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-400/25"
                >
                    Mark completed
                </button>
                <button
                    onClick={() => updateTaskStatus('failed')}
                    className="flex-1 rounded-lg bg-rose-400/15 py-2 text-xs font-semibold text-rose-300 transition hover:bg-rose-400/25"
                >
                    Mark failed
                </button>
            </div>
        </div>
    );
};

export default AcceptTask;