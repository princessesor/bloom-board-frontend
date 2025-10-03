import React, { useState } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";

type Props = {
  onLogin: (userData: any, navigate: NavigateFunction) => void;
};

export default function Login({ onLogin }: Props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;

    // replace with real backend auth when you have it
    const fakeUser = { username: email.split("@")[0], email };
    onLogin(fakeUser, navigate);
  };

  return (
    <div className="login-page">
      <h2 className="title">✨ Welcome back, Lovely ✨</h2>
      <p className="subtitle">We’ve been waiting for you 💌</p>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          placeholder="Your magical email 📧"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Secret password 🔒"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">Login 🌷</button>
      </form>
    </div>
  );
}
