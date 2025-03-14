import Container from "@/components/Container";
import Steps from "@/components/Steps";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container className="flex-1  flex flex-col w-full   grainy-dark">
      <Steps />
      <div className="min-h-[750px] pt-0 pb-20">{children}</div>
    </Container>
  );
};

export default Layout;
