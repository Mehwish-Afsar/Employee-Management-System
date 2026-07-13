import React from "react";
import Header from "../Topbar/Header";
import EmployeeCard from "../Cards/EmployeeCard";
import TaskList from "../Tasklist/TaskList";

const EmployeeDashboard = (props) => {
    return (
        <>
            <div className="bg-[#1C1C1C] h-screen w-screen text-white px-15 py-10">
                <Header changeUser={props.changeUser} data={props.data} />
                <EmployeeCard data={props.data} />
                <TaskList data={props.data} />
            </div>
        </>
    )
}

export default EmployeeDashboard