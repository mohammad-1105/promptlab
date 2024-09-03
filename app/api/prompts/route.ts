import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import PromptModel from "@/models/prompt.model";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(request: NextRequest) {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  try {
    // connect db
    await connectDB();

    // calculate the skip value based on the page and limit
    const skip = (page - 1) * limit;

    // fetch the prompts
    const prompts = await PromptModel.find().limit(limit).skip(skip).exec();

    // Get the total count of prompts
    const totalPrompts = await PromptModel.countDocuments().exec();

    // Return the prompts, total pages, and current page
    return NextResponse.json({
      message: "Prompts fetched successfully",
      prompts,
      totalPages: Math.ceil(totalPrompts / limit),
      currentPage: page,
    });
  } catch (err) {
    console.log("Failed to fetch prompts :: ", err);
    return NextResponse.json(
      { message: "Failed to fetch prompts" },
      { status: 500 }
    );
  }
}
