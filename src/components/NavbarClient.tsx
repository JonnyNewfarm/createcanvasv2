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
            ? "grainy-dark text-stone-900"
            : "bg-transparent text-white"
        } top-0 z-30 w-full  transition-all text-sm sm:text-lg`
      );
    } else {
      setPageStyling(
        "sticky top-0 w-full text-lg z-30 grainy-dark text-stone-900 transition-all backdrop-blur-lg"
      );
    }
  }, [pathname, navStyling]);

  return (
    <nav className={pageStyling}>
      <Container>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4 text-nowrap">
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

          <div className="text-center leading-none uppercase">
            <Link href={"/"}>
              <h1 className="text-sm m-0 leading-none">Custom</h1>
              <h1 className="font-bold m-0 text-2xl sm:text-4xl leading-none">
                Canvas
              </h1>
            </Link>
          </div>

          <Link
            href="/configure/upload"
            className={`flex items-center gap-1 text-white py-2 px-4 rounded-lg hover:opacity-90 ${
              pathname === "/"
                ? navStyling
                  ? "bg-stone-900"
                  : "bg-stone-700/30"
                : "bg-stone-900"
            }`}
          >
            Upload image
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
