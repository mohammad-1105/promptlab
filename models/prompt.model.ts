import mongoose, { Schema, Document } from "mongoose";

export interface Prompt extends Document {
  promptTitle: string;
  prompt: string;
  authorImageUrl: string;
  author: string;
  tag: string;
}

const promptSchema: Schema<Prompt> = new Schema(
  {
    promptTitle: {
      type: String,
      required: [true, "prompt title is required."],
      minlength: [8, "prompt title should be at least 8 characters."],
      maxlength: [32, "prompt title should be at most 32 characters."],
    },
    prompt: {
      type: String,
      required: [true, "prompt is required."],
      minlength: [40, "prompt should be at least 40 characters."],
      maxlength: [500, "prompt should be at most 500 characters."],
    },
    authorImageUrl: String,
    author: String,
    tag: {
      type: String,
      required: [true, "tag is required to maintain prompt lists"],
    },
  },
  { timestamps: true }
);

const PromptModel =
  mongoose.models.Prompt<Prompt> ||
  mongoose.model<Prompt>("Prompt", promptSchema);
export default PromptModel;
