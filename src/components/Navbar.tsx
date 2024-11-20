import React from "react";
import Container from "./Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const user = undefined;
  const isAdmin = false;
  return (
    <nav className="sticky z-[100] inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75  transition-all">
      <Container>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href={""} className="flex z-40 font-semibold">
            Canvas
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <Link href={"/api/auth/logout"} className="">
                  Sign out
                </Link>
                {isAdmin ? (
                  <Link href={"/api/auth/logout"} className="">
                    Dashboard
                  </Link>
                ) : null}

                <Link
                  href={"/configure/upload"}
                  className="hidden sm:flex items-center gap-1 bg-zinc-800 text-white py-2 px-4 rounded-xl hover:opacity-90"
                >
                  Create canvas
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link href={"/api/auth/register"} className="">
                  Sign up
                </Link>

                <Link href={"/api/auth/login"}>Login</Link>

                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

                <Link
                  href={"/configure/upload"}
                  className="hidden sm:flex items-center gap-1 bg-zinc-800 text-white py-2 px-4 rounded-xl hover:opacity-90"
                >
                  Create canvas
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
