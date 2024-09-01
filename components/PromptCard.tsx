import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export interface PromptCardProps {
  promptTitle: string;
  prompt: string;
  authorImageUrl: string;
  author: string;
  tag: string;
}

export default function PromptCard({
  promptTitle,
  prompt,
  authorImageUrl,
  author,
  tag,
}: PromptCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{promptTitle}</CardTitle>
        <CardDescription>A brief description of the prompt.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{prompt}</p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={authorImageUrl} />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">{author}</p>
          </div>
          <Badge variant="secondary">{tag}</Badge>
        </div>
      </CardFooter>
    </Card>
  );
}
