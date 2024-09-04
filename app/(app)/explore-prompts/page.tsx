import Prompts from "@/components/Prompts";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

export default async function PromptsPage() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    return (
      <div className="w-full flex justify-center items-center px-5">
       
        <Image
          src={"/assets/warning.jpg"}
          width={300}
          height={300}
          alt="warning-image"
          className="rounded-full object-cover mt-12"
        />
      </div>
    );
  }
  return (
    <div>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Explore the Prompts</h1>
        <p className="text-muted-foreground">
          Browse through the latest prompts created by our community.
        </p>
      </div>
      {/* prompts card section */}
      <Prompts />
    </div>
  );
}
