import React from "react";

const CompleteTask = ({ data }) => {
    return (
        <div className="flex h-full w-[280px] flex-shrink-0 flex-col rounded-2xl border border-white/10 border-l-4 border-l-emerald-400 bg-[#12151B] p-5 opacity-80">
            <div className="flex items-center justify-between">
                <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                    {data.category}
                </span>
                <span className="text-xs text-white/40">{data.taskDate}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{data.taskTitle}</h3>
            <p className="mt-2 flex-1 text-sm text-white/50">{data.taskDescription}</p>
            <div className="mt-5 flex items-center justify-center gap-1.5 rounded-lg bg-emerald-400/10 py-2 text-sm font-semibold text-emerald-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>
                Completed
            </div>
        </div>
    );
};

export default CompleteTask;