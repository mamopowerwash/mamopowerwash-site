"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e:any) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid login credentials");
    }
  };

  return (
    <div style={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"#f5f9ff"
    }}>
      <form onSubmit={handleLogin} style={{
        background:"white",
        padding:40,
        borderRadius:12,
        width:350,
        boxShadow:"0 10px 30px rgba(0,0,0,0.08)"
      }}>
        <h2>Staff Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{width:"100%",padding:12,marginBottom:15}}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{width:"100%",padding:12,marginBottom:15}}
        />

        {error && <div style={{color:"red"}}>{error}</div>}

        <button style={{
          width:"100%",
          padding:14,
          background:"#2563eb",
          color:"white",
          border:"none",
          borderRadius:8
        }}>
          Login
        </button>
      </form>
    </div>
  );
}
