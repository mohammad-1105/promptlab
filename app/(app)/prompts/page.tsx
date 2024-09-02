import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TriangleAlertIcon } from "lucide-react";

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
  return <div>prompts page</div>;
}
