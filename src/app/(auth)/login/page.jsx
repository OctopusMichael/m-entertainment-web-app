"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const login = () => {
  const [sign, setSign] = useState(false);
  const [hidePass, setHidePass] = useState(false);

  const handleClick = () => {
    setSign(!sign);
  };
  const handleHidePass = () => {
    setHidePass(!hidePass);
  };

  return (
    <section className="">
      <div className=" max-w-[1440px] min-h-screen   mx-auto flex flex-col justify-center items-center">
        <img
          className="w-auto h-[40px]"
          src="/assets/logo.svg"
          alt="icon-logo"
        />
        <form className="w-[90%] md:w-[450px] h-auto bg-blueSlate rounded-3xl p-[30px] flex flex-col gap-4  justify-center my-[20px] lg:my-[80px] ">
          {sign ? (
            <h1 className="text-[40px] text-white ">Sign Up</h1>
          ) : (
            <h1 className="text-[40px] text-white ">Login</h1>
          )}
          <input
            id=""
            placeholder="Email"
            type="text"
            className=" caret-red  ps-[20px] wauthfull outline-none bg-blueSlate   text-white inputLogin  "
            autoComplete="off"
          />
          <label className="relative">
            <input
              id=""
              placeholder="Password"
              type={hidePass ? "text" : "password"}
              className=" caret-red  ps-[50px] w-full outline-none bg-blueSlate  text-white inputLogin"
              autoComplete="off"
            />
            {hidePass ? (
              <Eye
                onClick={handleHidePass}
                className=" text-white absolute top-5 right-5 cursor-pointer"
              />
            ) : (
              <EyeOff
                onClick={handleHidePass}
                className=" text-slate-200 absolute top-5 right-5 cursor-pointer"
              />
            )}
          </label>

          {sign == true && (
            <label className="relative">
              <input
                id=""
                placeholder="Repeat password"
                type={hidePass ? "text" : "password"}
                className=" caret-red  ps-[50px] w-full outline-none bg-blueSlate  text-white inputLogin"
                autoComplete="off"
              />
              {hidePass ? (
                <Eye
                  onClick={handleHidePass}
                  className=" text-white absolute top-5 right-5 cursor-pointer"
                />
              ) : (
                <EyeOff
                  onClick={handleHidePass}
                  className=" text-slate-200 absolute top-5 right-5 cursor-pointer"
                />
              )}
            </label>
            /*  <input
              id=""
              placeholder="Repeat password"
              type="password"
              className=" caret-red  ps-[50px] w-full outline-none bg-blueSlate  text-white inputLogin"
              autoComplete="off"
            /> */
          )}

          {sign ? (
            <>
              <button className="rounded-xl bg-red w-full text-white h-[50px] hover:bg-white hover:text-black font-bold">
                {" "}
                Create an account{" "}
              </button>
              <p className="text-white text-center ">
                Already have an account?{" "}
                <span
                  onClick={handleClick}
                  className="text-red hover:text-blue-600"
                >
                  Login
                </span>
              </p>
            </>
          ) : (
            <>
              <button className="rounded-xl bg-red w-full text-white h-[50px] hover:bg-white hover:text-black font-bold">
                {" "}
                Login to your account{" "}
              </button>

              <p className="text-white text-center ">
                Don't have an account ?{" "}
                <span
                  onClick={handleClick}
                  className="text-red hover:text-blue-600"
                >
                  Sign Up
                </span>
              </p>
            </>
          )}
        </form>
        <Link
          href="/"
          className="rounded-xl bg-red  text-white h-[50px] hover:bg-white hover:text-black font-bold w-[200px] mx-auto flex justify-center items-center"
        >
          Free Trial
        </Link>
      </div>
    </section>
  );
};

export default login;
