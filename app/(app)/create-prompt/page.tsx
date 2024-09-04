import CreatePrompt from "@/components/CreatePrompt";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

export default async function CreatePromptPage() {
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
    <div className="">
      <CreatePrompt />
    </div>
  );
}
