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
import { ThemeToggle } from "./ThemeToggle";

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

        {/* Navigation */}
        <div>
          {(await isAuthenticated()) ? (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Image
                    src={user?.picture || "/assets/random-user.jpeg"}
                    alt="profile image"
                    width={40}
                    height={40}
                    className="rounded-full object-cover cursor-pointer select-none"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="underline">
                      {`${user?.given_name} ${user?.family_name}`}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="my-3" />
                    <DropdownMenuItem className="text-sm">
                      Verified{" "}
                      <BadgeCheck className="ml-1 w-4 h-4 text-blue-700" />
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup>
                    <Link href={"/create-prompt"}>
                      <DropdownMenuItem>Create prompt</DropdownMenuItem>
                    </Link>
                    <Link href={"/explore-prompts"}>
                      <DropdownMenuItem>Explore prompts</DropdownMenuItem>
                    </Link>

                    <span className="flex justify-end my-2">
                      <ThemeToggle />
                    </span>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator className="my-3" />
                  <LogoutLink className="w-full">
                    <Button className="w-full" variant={"destructive"}>
                      Sign out
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
