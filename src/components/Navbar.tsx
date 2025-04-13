import React from "react";

import NavbarClient from "@/components/NavbarClient";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return <NavbarClient user={user} isAdmin={isAdmin} />;
};

export default Navbar;
