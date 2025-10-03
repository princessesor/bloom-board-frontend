import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import WelcomeMessage from "./pages/WelcomeMessage"; // your welcome message component

export default function App() {
  const [user, setUser] = useState<any | null>(null);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [initialized, setInitialized] = useState(false); // wait until localStorage is checked

  // ✅ Restore user from localStorage on startup
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setInitialized(true); // mark initialization complete
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Prevent rendering before user is restored
  if (!initialized) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={user ? <Navigate to="/landing" /> : <Home />}
        />

        {/* Signup page */}
        <Route
          path="/signup"
          element={
            <Signup
              onSignup={(name, navigate) => {
                setWelcomeMessage(`🌸 Get ready to bloom, ${name}!`);
                navigate("/welcome");
              }}
            />
          }
        />

        
        {/* Login page */}
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/landing" />
            ) : (
              <Login
                onLogin={(userData, navigate) => {
                  setUser(userData);
                  localStorage.setItem("user", JSON.stringify(userData));
                  navigate("/landing");
                }}
              />
            )
          }
        />

        {/* Landing page (protected) */}
        <Route
          path="/landing"
          element={
            user ? (
              <Landing user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}





