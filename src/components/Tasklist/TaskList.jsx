import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
    return (
        <div className="mt-10">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">Your tasks</h2>
            <div className="flex w-full flex-nowrap items-stretch gap-4 overflow-x-auto pb-3">
                {data.tasks.length === 0 && (
                    <p className="py-10 text-sm text-white/40">No tasks assigned yet.</p>
                )}
                {data.tasks.map((elem, idx) => {
                    if (elem.active) return <AcceptTask key={idx} data={elem} />;
                    if (elem.newTask) return <NewTask key={idx} data={elem} />;
                    if (elem.completed) return <CompleteTask key={idx} data={elem} />;
                    if (elem.failed) return <FailedTask key={idx} data={elem} />;
                    return null;
                })}
            </div>
        </div>
    );
};

export default TaskList;