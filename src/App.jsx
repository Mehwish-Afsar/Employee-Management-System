import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsed = JSON.parse(loggedInUser);
      setUser(parsed.role);
      setLoggedInUserData(parsed.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me" && password === '123') {
      setUser('admin');
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }));
    } else if (userData) {
      const employee = userData.find((e) => email === e.email && password === e.password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard data={loggedInUserData} changeUser={setUser} />
      ) : null}
    </>
  );
};

export default App;