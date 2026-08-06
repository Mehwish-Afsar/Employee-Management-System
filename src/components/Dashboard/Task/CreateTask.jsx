import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const CATEGORIES = ["Development", "Design", "Testing", "Documentation", "Review", "Support", "Other"];

const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#0B0D11] px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/20";
const labelClass = "mb-1.5 block text-xs font-medium text-white/60";

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            completed: false,
            failed: false
        };

        const data = [...userData];

        data.forEach((elem) => {
            if (assignTo === elem.firstName) {
                elem.tasks.push(newTask);
                elem.taskCount.newTask = elem.taskCount.newTask + 1;
            }
        });

        setUserData(data);

        setTaskTitle('');
        setAssignTo('');
        setCategory("");
        setTaskDate("");
        setTaskDescription("");
    };

    return (
        <div className="rounded-2xl border border-white/10 bg-[#12151B] p-6">
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-wide text-white/50">Create a task</h2>

            <form onSubmit={submitHandler} className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label className={labelClass}>Task title</label>
                        <input
                            type="text"
                            placeholder="Make a UI Design"
                            className={inputClass}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            value={taskTitle}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Date</label>
                        <input
                            type="date"
                            className={`${inputClass} [color-scheme:dark]`}
                            onChange={(e) => setTaskDate(e.target.value)}
                            value={taskDate}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Assign to</label>
                        <input
                            type="text"
                            placeholder="Employee name"
                            className={inputClass}
                            onChange={(e) => setAssignTo(e.target.value)}
                            value={assignTo}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className={labelClass}>Category</label>
                        <select
                            className={`${inputClass} appearance-none`}
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                        >
                            <option value="" disabled>Select a category</option>
                            {CATEGORIES.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex w-full flex-col md:w-72">
                    <label className={labelClass}>Description</label>
                    <textarea
                        rows={4}
                        className={`${inputClass} mb-4 resize-none`}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        value={taskDescription}
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-amber-500 py-2.5 text-sm font-semibold text-[#12151B] transition hover:bg-amber-400 active:scale-[.98]"
                    >
                        Create task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;