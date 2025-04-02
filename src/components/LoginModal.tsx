import type { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { buttonVariants } from "./ui/button";

const LoginModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className=" z-[9999999999] bg-white text-stone-900">
        <DialogHeader>
          <div className="relative mx-auto  w-24 h-24 mb-2">
            <Image
              src={"/step-1.png"}
              alt="step1"
              className="object-contain"
              fill
            />
          </div>
          <DialogTitle className="text-2xl text-center font-bold tracking-tight ">
            Sign in to continue
          </DialogTitle>
          <DialogDescription className="text-base text-center py-2">
            <span className="font-medium text-stone-900">
              Your configuration was saved!
            </span>{" "}
            Please login or create account to checkout
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6 divide-x divide-stone-200">
          <LoginLink className={buttonVariants({ variant: "outline" })}>
            Login
          </LoginLink>

          <RegisterLink className={buttonVariants({ variant: "default" })}>
            Register
          </RegisterLink>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
