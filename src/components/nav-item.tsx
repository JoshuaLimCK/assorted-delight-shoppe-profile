import Link from "next/link";

interface NavItemProps {
  link: string;
  content: string;
}

export const NavItem = ({ link, content }: NavItemProps) => {
  return (
    <>
      <Link href={link} className="group p-1 lg:p-4">
        <p className="navText text-center">{content}</p>
        <hr className="navLine group-hover:w-full" />
      </Link>
    </>
  );
};
