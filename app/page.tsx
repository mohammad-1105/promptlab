import Link from "next/link";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CardsSection from "@/components/CardsSection";
export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  return (
    <div className="">
      <main className="">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock Your Creativity with PromptLab
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover, create, and collaborate on the best AI prompts to
                    power your projects.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button disabled={isUserAuthenticated}>
                    <RegisterLink className="px-8">Sign Up</RegisterLink>
                  </Button>
                  <Link
                    href="/explore-prompts"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Explore Prompts
                  </Link>
                </div>
              </div>
              <Image
                src={"/assets/hero.jpg"}
                width={550}
                height={310}
                alt="Hero"
                placeholder={"blur"}
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk4A6tBwABVADhFXBKhQAAAABJRU5ErkJggg=="
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last select-none"
              />
            </div>
          </div>
        </section>

        {/* cards sections */}
        <CardsSection />
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Unlock Your Creativity with PromptLab
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover, create, and collaborate on the best AI prompts to
                power your projects. Explore our growing library of prompts and
                connect with a community of creators.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Button disabled={isUserAuthenticated}>
                <RegisterLink className="px-8">Sign Up</RegisterLink>
              </Button>
              <Link
                href="/explore-prompts"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Explore Prompts
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 PromptLab. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="https://x.com/amaan_1105"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Twitter
          </Link>
        </nav>
      </footer>
    </div>
  );
}
