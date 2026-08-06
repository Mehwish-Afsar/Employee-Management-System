import React from "react";
import Header from "../Topbar/Header";
import CreateTask from "./Task/CreateTask";
import AllTask from "./Task/AllTask";

const AdminDashboard = (props) => {
    return (
        <div className="min-h-screen w-full bg-[#0B0D11] px-6 py-10 text-white sm:px-10 lg:px-16">
            <Header changeUser={props.changeUser} data={props.data} />
            <div className="mt-8 flex flex-col gap-6">
                <CreateTask />
                <AllTask />
            </div>
        </div>
    );
};

export default AdminDashboard;