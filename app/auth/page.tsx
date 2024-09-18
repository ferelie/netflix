"use client";
import Input from "@/components/Input";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [mode, setMode] = useState<"login" | "register">("login");

  const toggleMode = () => {
    setMode(mode === "login" ? "register" : "login");
  };

  return (
    <div
      className={`relative h-full w-full bg-hero bg-no-repeat bg-center bg-cover`}
    >
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo1.png" alt="logo" className="h-28" />
        </nav>

        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {mode === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              <Input
                id="email"
                label="Email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              {mode === "register" && (
                <Input
                  id="userName"
                  label="User Name"
                  type="text"
                  onChange={(event) => setUserName(event.target.value)}
                  value={userName}
                />
              )}
              <Input
                id="password"
                label="Password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-800 transition">
              {mode === "login" ? "Sign In" : "Register"}
            </button>
            <p className="text-neutral-500 mt-12">
              { mode === "login" ? `First time using Netflix?`: `Already have an account?`}
              <span
                className="text-white ml-1 hover:underline cursor-pointer"
                onClick={toggleMode}
              >
                { mode === "login" ? `Create an account` : `Go to LogIn`}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
