import React from "react";
import Container from "./Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav className="sticky z-[100] inset-x-0 top-0 w-full border-b border-gray-200 bg-stone-50  transition-all">
      <Container>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href={"/"} className="flex z-40 font-semibold">
            Canvas
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <LogoutLink className="">Sign out</LogoutLink>
                {isAdmin ? (
                  <Link href={"/admin"} className="">
                    Dashboard
                  </Link>
                ) : null}

                <Link
                  href={"/configure/upload"}
                  className=" sm:flex items-center gap-1 bg-zinc-800 text-white py-2 px-4 rounded-xl hover:opacity-90"
                >
                  Upload image
                </Link>
              </>
            ) : (
              <>
                <RegisterLink className="">Sign up</RegisterLink>

                <LoginLink>Login</LoginLink>

                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

                <Link
                  href={"/configure/upload"}
                  className="flex items-center gap-1 bg-zinc-800 text-white py-2 px-4 rounded-lg hover:opacity-90"
                >
                  Upload image
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
