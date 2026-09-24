import { NavLinks } from "@/lib/constants";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-xs">
      <div className=" flex justify-between items-center py-4 px-8 shadow shadow-blue-200">
        <Link href={"#home"} className="font-bold">
          Stackflow
        </Link>

        <ul className="hidden md:flex md:justify-center md:items-center md:gap-8">
          {NavLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                className="active:text-[#4F46E5] active:bg-[#EEF2FF] hover:text-[#4F46E5] hover:bg-[#EEF2FF] px-2 py-1 rounded-sm"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex md:justify-center md:items-center md:gap-8">
          <Link href={""}>Sign In</Link>
          <Link
            href={""}
            className="font-semibold text-white bg-[#4F46E5] px-2 py-1 rounded-sm"
          >
            Start Free
          </Link>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden">
            <Menu className="hover:cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="shadow-blue-200">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Go to</DropdownMenuLabel>
              {NavLinks.map((link) => (
                <DropdownMenuItem key={link.id}>
                  <Link href={`#${link.id}`}>{link.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuLabel>Log in</DropdownMenuLabel>
              <DropdownMenuItem>
                <Link href={""}>Sign In</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-[#4F46E5]">
                <Link href={""}>Start Free</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
