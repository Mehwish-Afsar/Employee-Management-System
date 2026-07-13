import React, { useState } from "react";

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail('')
        setPassword('')

    }
    return (
        <div className="flex h-screen w-screen justify-center items-center bg-black">
            <div className="border-2 border-emerald-600 h-[70%] w-[30%] rounded-2xl">
                <h1 className="text-center text-3xl font-bold m-12 text-white">Login</h1>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)

                    }}
                    className="text-black outline-none flex flex-col items-center justify-center px-10 gap-6
                  ">
                    <input
                        value={email}

                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        type="email"
                        placeholder="Enter Your Name"
                        className="border-2 border-emerald-600 bg-transparent text-white px-4 py-3 rounded-full text-xl w-full placeholder:text-gray-400"
                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        type="password"
                        placeholder="Enter Your Password"
                        className="border-2 border-emerald-600 bg-transparent text-white px-4 py-3 rounded-full text-xl w-full placeholder:text-gray-400"
                    />
                    <button
                        className="bg-emerald-600 text-white font-semibold border-none px-4 py-3 rounded-full text-xl w-full mt-7
                    hover:bg-emerald-800 active:scale-95"
                    >
                        Login
                    </button>
                </form>



            </div>

        </div>
    )
}

export default Login