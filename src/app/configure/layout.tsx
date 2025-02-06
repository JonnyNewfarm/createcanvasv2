import Container from "@/components/Container";
import Steps from "@/components/Steps";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container className="flex-1 flex flex-col w-full grainy-dark">
      <Steps />
      {children}
    </Container>
  );
};

export default Layout;
