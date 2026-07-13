import React, { useState } from "react";

const Header = (props) => {
    const username = !props.data ? "Admin" : props.data.firstName

    const LogoutUser = () => {
        localStorage.setItem("loggedInUser","")
        props.changeUser("")
    }
    return (
        <div className="flex items-center justify-between">
            <div>
                <h4 className="text-2xl font-semibold">Hello,</h4>
                <h1 className="text-4xl font-bold">{username} 👋</h1>
            </div>
            <div>
                <button 
                onClick={LogoutUser}
                className="bg-red-600 text-white font-semibold border-none px-4 py-3 rounded-xl text-xl" >Logout</button>
            </div>

        </div>

    )
}

export default Header