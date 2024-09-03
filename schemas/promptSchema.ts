import { z } from "zod";

export const promptSchema = z.object({
  promptTitle: z
    .string({ message: "prompt title is required" })
    .min(8, { message: "prompt title should be at least 8 characters." })
    .max(50, { message: "prompt title should be at most 50 characters." }),

  prompt: z
    .string({ message: "prompt is required" })
    .min(40, { message: "prompt should be at least 40 characters." })
    .max(500, { message: "prompt should be at most 500 characters." }),

  tag: z.string({ message: "tag is required to maintain prompt lists" }),
});
