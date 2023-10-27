"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bookmark, Film, Grid2X2, LogOut, Tv } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [logout, setLogout] = useState(false);

  const handleLogout = () => {
    setLogout(!logout);
  };

  useEffect(() => {
    function handleClick(event) {
      // La función se ejecutará cada vez que se haga clic en cualquier parte de la ventana del navegador.

      if (logout && !event.target.closest(".logout")) {
        setLogout(false);
      }
    }

    // Agrega el manejador de eventos global al montar el componente
    document.addEventListener("click", handleClick);

    // Limpia el manejador de eventos al desmontar el componente para evitar pérdida de memoria
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [logout]);

  return (
    <section className=" relative lg:h-screen  ">
      <nav className="  lg:fixed lg:top-[30px] lg:ms-[40px] px-[20px] lg:px-[0px]  lg:rounded-2xl bg-slate-700 h-[10vh] lg:h-[95vh]  w-full lg:w-[100px] bg-blue flex lg:flex-col items-center justify-between py-[50px] ">
        <ul className=" block lg:hidden items-center">
          <li className="  lg:mb-[20px]">
            <Link href="/">
              <img
                className="w-[25px]"
                src="/assets/logo.svg"
                alt="Oficial Logo"
              />
            </Link>
          </li>
        </ul>

        <ul className="flex lg:flex-col gap-4 lg:gap-[30px]">
          <li className="text-red lg:mb-[20px] hidden lg:block">
            <Link href="/">
              <img
                className="w-[25px]"
                src="/assets/logo.svg"
                alt="Oficial Logo"
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Grid2X2
                className={`${
                  pathname === "/" ? "text-red" : "text-white"
                } w-[20px] lg:w-full`}
              />
            </Link>
          </li>
          <li>
            <Link href="/movies">
              <Film
                className={`${
                  pathname === "/movies" ? "text-red" : "text-white"
                } w-[20px] lg:w-full`}
              />
            </Link>
          </li>
          <li>
            <Link href="/series">
              <Tv
                className={`${
                  pathname === "/series" ? "text-red" : "text-white"
                } w-[20px] lg:w-full`}
              />
            </Link>
          </li>
          <li>
            <Link href={"/bookmark"}>
              <Bookmark
                className={`${
                  pathname === "/bookmark" ? "text-red" : "text-white"
                } w-[20px] lg:w-full`}
              />
            </Link>
          </li>
        </ul>

        <div
          onClick={handleLogout}
          className=" w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] rounded-full bg-slate-400 border border-solid border-white hover:border-4 hover:border-red"
        >
          <img src="/assets/OctoLogo.svg" alt="icon-logo-octopus" />
        </div>
      </nav>
      <Link
        href={"/login"}
        className={` logout ${
          logout ? "visible " : "invisible "
        } transition-all rounded-xl z-50 lg:fixed absolute  bottom-[-22px] right-4 lg:bottom-[130px]  lg:left-[50px] w-[150px] h-[50px] flex gap-4 justify-center  items-center bg-slate-800 hover:bg-slate-300 hover:text-slate-700 text-white font-bold shadow-xl  `}
      >
        Logout <LogOut />
      </Link>
    </section>
  );
};

export default Navbar;
