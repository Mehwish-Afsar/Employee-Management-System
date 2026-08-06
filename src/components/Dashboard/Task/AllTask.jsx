import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const AllTask = () => {
    const [userData] = useContext(AuthContext);

    return (
        <div className="mt-6 rounded-2xl border border-white/10 bg-[#12151B] p-5">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">Team overview</h2>

            <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white/40">
                <span className="w-1/5">Employee</span>
                <span className="w-1/5 text-center text-indigo-400">New</span>
                <span className="w-1/5 text-center text-amber-400">Active</span>
                <span className="w-1/5 text-center text-emerald-400">Completed</span>
                <span className="w-1/5 text-center text-rose-400">Failed</span>
            </div>

            <div className="mt-2 max-h-56 overflow-auto">
                {userData.length === 0 ? (
                    <p className="py-8 text-center text-sm text-white/40">No employees yet.</p>
                ) : (
                    userData.map((elem, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between border-b border-white/5 px-4 py-3 text-sm transition hover:bg-white/[0.03]"
                        >
                            <span className="w-1/5 font-medium text-white">{elem.firstName}</span>
                            <span className="w-1/5 text-center font-semibold text-indigo-400">{elem.taskCount.newTask}</span>
                            <span className="w-1/5 text-center font-semibold text-amber-400">{elem.taskCount.active}</span>
                            <span className="w-1/5 text-center font-semibold text-emerald-400">{elem.taskCount.completed}</span>
                            <span className="w-1/5 text-center font-semibold text-rose-400">{elem.taskCount.failed}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AllTask;