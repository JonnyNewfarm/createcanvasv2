"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Link from "next/link";

import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { usePathname } from "next/navigation";

interface NavbarProps {
  user: any;
  isAdmin: any;
}

const Navbar = ({ user, isAdmin }: NavbarProps) => {
  const pathname = usePathname();
  const [pageStyling, setPageStyling] = useState("");
  const [navStyling, setNavStyling] = useState(false);

  useEffect(() => {
    const changeStyle = () => {
      if (window.scrollY >= 90) {
        setNavStyling(true);
      } else {
        setNavStyling(false);
      }
    };

    window.addEventListener("scroll", changeStyle);

    return () => {
      window.removeEventListener("scroll", changeStyle);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      setPageStyling(
        `fixed ${
          navStyling
            ? "grainy-dark text-[#333231]"
            : "bg-transparent text-light"
        } top-0 z-30 w-full  transition-all  sm:text-lg`
      );
    } else {
      setPageStyling(
        "sticky top-0 w-full text-lg z-30 grainy-dark text-[#333231] transition-all backdrop-blur-lg"
      );
    }
  }, [pathname, navStyling]);

  return (
    <nav className={pageStyling}>
      <Container>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4 text-nowrap text-xs sm:text-lg">
            {user ? (
              <>
                <LogoutLink>Sign out</LogoutLink>
                {isAdmin && <Link href="/admin">Dashboard</Link>}
              </>
            ) : (
              <>
                <RegisterLink>Sign up</RegisterLink>
                <LoginLink>Login</LoginLink>
              </>
            )}
          </div>

          <div className="text-center  leading-none uppercase">
            <Link href={"/"}>
              <h1 className="font-bold m-0  text-xl sm:text-3xl leading-none">
                Canvas
              </h1>
            </Link>
          </div>

          <Link
            href="/configure/upload"
            className="flex items-center gap-1 text-xs sm:text-lg  py-2 px-3  hover:opacity-90"
          >
            Upload image
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
