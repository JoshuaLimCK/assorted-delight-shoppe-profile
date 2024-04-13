"use client";

import { useRouter } from "next/navigation";

interface StartButtonProps {
  children: React.ReactNode;
  mode?: "redirect" | "modal";
  asChild?: boolean;
}

export const StartButton = ({
  children,
  mode = "redirect",
  asChild,
}: StartButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/dashboard/introduction");
  };
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
