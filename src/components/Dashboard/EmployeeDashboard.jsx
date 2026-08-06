import React from "react";
import Header from "../Topbar/Header";
import EmployeeCard from "../Cards/EmployeeCard";
import TaskList from "../Tasklist/TaskList";

const EmployeeDashboard = (props) => {
    return (
        <div className="min-h-screen w-full bg-[#0B0D11] px-6 py-10 text-white sm:px-10 lg:px-16">
            <Header changeUser={props.changeUser} data={props.data} />
            <EmployeeCard data={props.data} />
            <TaskList data={props.data} />
        </div>
    );
};

export default EmployeeDashboard;