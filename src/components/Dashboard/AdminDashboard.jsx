import React, { useContext } from "react";
import Header from "../Topbar/Header";
import EmployeeCard from "../Cards/EmployeeCard";
import CreateTask from "./Task/CreateTask";
import AllTask from "./Task/AllTask";

const AdminDashboard = (props) => {

    return (
        <>
            <div className="bg-black h-full w-full text-white px-15 py-10">
                <Header changeUser={props.changeUser} data={props.data} />
                <CreateTask />
                <AllTask />
            </div>
        </>
    )
}

export default AdminDashboard
