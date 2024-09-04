import connectDB from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";
import PromptModel from "@/models/prompt.model";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";

  try {
    await connectDB();

    // search by title or tag
    const searchedPrompts = await PromptModel.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { tag: { $regex: search, $options: "i" } },
      ],
    }).exec();

    return NextResponse.json({
      message: "Prompts fetched successfully",
      prompts: searchedPrompts,
    });
  } catch (err) {
    console.log("Failed to fetch prompts :: ", err);
    return NextResponse.json(
      { message: "Failed to fetch prompts" },
      { status: 500 }
    );
  }
}
