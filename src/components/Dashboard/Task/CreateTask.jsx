import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";

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
        <div className="bg-[#1C1C1C] mt-5 rounded">
            <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between p-5">
                <div className="w-1/2">
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Task title</h3>
                        <input 
                            type="text" 
                            placeholder="Make a UI Design"
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            onChange={(e) => setTaskTitle(e.target.value)}
                            value={taskTitle}
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                        <input
                            type="date" 
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            onChange={(e) => setTaskDate(e.target.value)}
                            value={taskDate}
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                        <input
                            type="text" 
                            placeholder="employee Name"
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            onChange={(e) => setAssignTo(e.target.value)}
                            value={assignTo}
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                        <input 
                            type="text" 
                            placeholder="design, dev, etc"
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                        />
                    </div>
                </div>

                <div className="w-2/5 flex flex-col items-start">
                    <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                    <textarea 
                        className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                        onChange={(e) => setTaskDescription(e.target.value)}
                        value={taskDescription}
                    ></textarea>
                    <button className="bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm mt-4 w-full text-white">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;