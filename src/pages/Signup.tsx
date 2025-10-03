import React, { useState } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";

type Props = {
  onSignup: (name: string, navigate: NavigateFunction) => void;
};

export default function Signup({ onSignup }: Props) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !password) return;
    // call parent handler and pass navigate so App can route
    onSignup(name, navigate);
  };

  return (
    <div className="signup-page">
      <h2 className="title">🌸 Join the Bloom Board 🌸</h2>
      <p className="subtitle">Let’s start your self-growth journey!</p>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Your cute name ✨"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email 📧"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password 🔒"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">Sign Up 💖</button>
      </form>
    </div>
  );
}

