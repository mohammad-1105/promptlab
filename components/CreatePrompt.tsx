"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { promptSchema } from "@/schemas/promptSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useToast } from "@/hooks/use-toast";
import { LoaderCircle } from "lucide-react";

export default function CreatePrompt() {
  const { toast } = useToast();

  // Define the form
  const form = useForm<z.infer<typeof promptSchema>>({
    resolver: zodResolver(promptSchema),
    defaultValues: {
      promptTitle: "",
      prompt: "",
      tag: "",
    },
  });

  // Define a submit handler
  const onSubmit = async (data: z.infer<typeof promptSchema>) => {
    try {
      const response = await axios.post("/api/create-prompt", data);
      toast({
        description: response.data.message,
      });

      // reset the form after successfull
      form.reset();
    } catch (error) {
      console.log("Failed to upload prompt :: ", error);
      toast({
        variant: "destructive",
        description: "Failed to upload prompt",
      });
    }
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="container px-4 md:px-6"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Create a Prompt</h1>
              <p className="text-muted-foreground">
                Share your ideas and inspire others.
              </p>
            </div>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="promptTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-3 text-xl">Prompt Title</FormLabel>
                    <FormControl>
                      <Input placeholder="JavaScript Mentor" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-3 text-xl">Prompt</FormLabel>
                    <FormControl>
                      <Textarea
                        id="prompt"
                        placeholder="I need a mentor who can guide me in mastering JavaScript. Please provide clear, step-by-step explanations, real-world examples, and help me understand advanced concepts like asynchronous programming, OOP, and the latest ES features. Your guidance should be patient, detailed, and focused on improving my problem-solving skills"
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tag"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-3 text-xl">Tag</FormLabel>
                    <FormControl>
                      <Input placeholder="JavaScript" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={form.formState.isSubmitting}
                type="submit"
                className="w-full"
              >
                {form.formState.isSubmitting ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  "Submit Prompt"
                )}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
