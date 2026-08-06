import React, { useState } from "react";

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-[#0B0D11] px-4">
            <div className="w-full max-w-sm">
                <div className="mb-8 flex flex-col items-center gap-3 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 ring-1 ring-amber-400/30">
                        <span className="text-xl font-bold text-amber-400">T</span>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-white">Welcome back</h1>
                        <p className="mt-1 text-sm text-white/50">Sign in to your task workspace</p>
                    </div>
                </div>

                <form
                    onSubmit={submitHandler}
                    className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#12151B] p-7 shadow-2xl shadow-black/40"
                >
                    <div>
                        <label className="mb-1.5 block text-xs font-medium text-white/60">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                            placeholder="you@company.com"
                            className="w-full rounded-xl border border-white/10 bg-[#0B0D11] px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/20"
                        />
                    </div>

                    <div>
                        <label className="mb-1.5 block text-xs font-medium text-white/60">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            type="password"
                            placeholder="••••••••"
                            className="w-full rounded-xl border border-white/10 bg-[#0B0D11] px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/20"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 w-full rounded-xl bg-amber-500 py-2.5 text-sm font-semibold text-[#12151B] transition hover:bg-amber-400 active:scale-[.98]"
                    >
                        Sign in
                    </button>

                    <p className="mt-1 text-center text-[11px] leading-relaxed text-white/30">
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;