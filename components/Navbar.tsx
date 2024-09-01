import Image from "next/image";
import Container from "./Container";
import { Button } from "./ui/button";
import {
  LoginLink,
  RegisterLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { BadgeCheck } from "lucide-react";

export default async function Navbar() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();

  return (
    <Container>
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/assets/app-logo.png"}
            alt="PromptLab Logo"
            width={90}
            height={90}
            className="rounded-full object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:block">
          {(await isAuthenticated()) ? (
            <div className="flex items-center gap-4">
              <Link href={"/create-prompt"}>
                <Button>Create prompt</Button>
              </Link>

              <span title="profile" className="relative flex">
                <Image
                  src={user?.picture || "/assets/random-user.jpeg"}
                  alt="profile image"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />

                <abbr title="verified">
                <BadgeCheck className="w-5 h-5 rounded-full text-blue-700 -ml-2" />
                </abbr>
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <LoginLink>
                <Button>Sign In</Button>
              </LoginLink>

              <RegisterLink>
                <Button variant={"outline"}>Sign Up</Button>
              </RegisterLink>
            </div>
          )}
        </div>

        {/* Mobile navigation */}
        <div className="sm:hidden">
          {(await isAuthenticated()) ? (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Image
                    src={user?.picture || "/assets/random-user.jpeg"}
                    alt="profile image"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="text-sm">
                      Verified{" "}
                      <BadgeCheck className="ml-1 w-4 h-4 text-blue-700" />
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup>
                    <Link href={"/create-prompt"}>
                      <DropdownMenuItem>Create prompt</DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <Link href={"https://github.com/mohammad-1105"}>
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>Support</DropdownMenuItem>

                  <DropdownMenuSeparator />
                  <LogoutLink className="w-full">
                    <Button className="w-full" variant={"destructive"}>
                      Log out
                    </Button>
                  </LogoutLink>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <LoginLink>
                <Button size={"sm"}>Sign In</Button>
              </LoginLink>

              <RegisterLink>
                <Button size={"sm"} variant={"outline"}>
                  Sign Up
                </Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </nav>
    </Container>
  );
}
