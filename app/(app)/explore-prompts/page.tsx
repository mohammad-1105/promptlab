import Container from "@/components/Container";
import PromptCard from "@/components/PromptCard";
import Prompts from "@/components/Prompts";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { SearchIcon, TriangleAlertIcon } from "lucide-react";

export default async function PromptsPage() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    return (
      <div className="w-full h-screen flex justify-center items-center px-5">
        <Alert variant="destructive" className="w-full max-w-2xl mx-auto">
          <TriangleAlertIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            You are not authenticated. Please Sign in to see prompts
          </AlertDescription>
        </Alert>
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
      <div className="relative w-full max-w-md mx-auto mt-5 px-3 sm:px-0">
        <SearchIcon className="absolute left-4 sm:left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for prompts..."
          className="pl-10 pr-4 py-2 rounded-md w-full"
        />
      </div>

      {/* prompts card section */}
      <Prompts/>
    </div>
  );
}
