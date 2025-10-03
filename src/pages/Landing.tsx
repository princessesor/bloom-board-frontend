import { useNavigate } from "react-router-dom";

interface LandingProps {
  user: {
    id: string;
    username: string;
    email: string;
  };
  onLogout: () => void;
}

export default function Landing({ user , onLogout}: LandingProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();   //clear user and localstorage
    navigate("/");    //redirect to Home page
  };

  return (
    <div>
      <h1>Hi, Welcome {user.username}! 🌸</h1>
      <p>Your Bloom season awaits! 🌷✨ </p>
      <button 
        onClick={onLogout} 
        style={{
          marginTop: "2rem",
          padding:  "0.8rem 1.5rem",
          borderRadius: "1rem",
          border: "none",
          backgroundColor: "#ff6fa5",
          color: "#fff",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}


