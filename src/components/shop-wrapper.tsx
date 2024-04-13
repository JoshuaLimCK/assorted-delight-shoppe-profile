"use client";

import { secondaryFont } from "@/fonts";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface ShopWrapperProps {
  imgSrc: string;
  imgAlt: string;
  imgTxt?: string;
  route?: string;
}

export const ShopWrapper = ({
  imgSrc,
  imgAlt,
  imgTxt = "",
  route = "",
}: ShopWrapperProps) => {
  const router = useRouter();
  const onClick = () => {
    if (route != "") router.push(route);
  };
  return (
    <div onClick={onClick} className="cursor-pointer">
      <img src={imgSrc} alt={imgAlt} className="startPageHotelImg" />
      <p className={cn("text-center", secondaryFont.className)}>{imgTxt}</p>
    </div>
  );
};
