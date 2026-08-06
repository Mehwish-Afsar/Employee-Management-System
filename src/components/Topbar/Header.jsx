import React from "react";

const Header = (props) => {
    const username = !props.data ? "Admin" : props.data.firstName;
    const initial = username.charAt(0).toUpperCase();

    const LogoutUser = () => {
        localStorage.setItem("loggedInUser", "");
        props.changeUser("");
    };

    return (
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-lg font-bold text-amber-400 ring-1 ring-amber-400/30">
                    {initial}
                </div>
                <div>
                    <p className="text-sm text-white/50">Welcome back,</p>
                    <h1 className="text-2xl font-bold tracking-tight text-white">{username}</h1>
                </div>
            </div>
            <button
                onClick={LogoutUser}
                className="rounded-xl border border-white/10 bg-[#171B22] px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:border-rose-400/40 hover:text-rose-400"
            >
                Logout
            </button>
        </div>
    );
};

export default Header;