import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";

export default function PromptCardSkeleton() {
  return (
    <Card className="w-full max-w-sm animate-pulse">
      <CardHeader>
        <CardTitle className="h-6 bg-muted rounded-md w-3/4"></CardTitle>
        <div className="h-4 bg-muted rounded-md w-1/2 mt-2"></div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded-md"></div>
          <div className="h-4 bg-muted rounded-md"></div>
          <div className="h-4 bg-muted rounded-md w-5/6"></div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2">
          <Avatar>
            <div className="h-10 w-10 bg-muted rounded-full"></div>
            <AvatarFallback className="h-10 w-10 bg-muted rounded-full"></AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-muted rounded-md w-24"></div>
            <Badge variant="secondary" className="h-4 w-12 bg-muted rounded-md"></Badge>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
