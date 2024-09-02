import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import PromptModel from "@/models/prompt.model";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { promptSchema } from "@/schemas/promptSchema";

export async function POST(request: NextRequest) {
  try {
    // connect db first
    await connectDB();

    // get the data from request
    const { promptTitle, prompt, tag } = await request.json();


    // zod validation
    const { error, success } = promptSchema.safeParse({
      promptTitle,
      prompt,
      tag,
    });
    if (!success) {
      return NextResponse.json(
        {
          message: error.issues[0].message,
        },
        { status: 400 }
      );
    }

    // get the user from session
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    // create a new prompt
    const newPrompt = await PromptModel.create({
      promptTitle,
      prompt,
      authorImageUrl: user.picture,
      author: `${user.given_name} ${user.family_name}`,
      tag,
    });

    // save the prompt
    await newPrompt.save();

    // return the response
    return NextResponse.json(
      {
        message: "Prompt created successfully",
      },
      { status: 201 }
    );
  } catch (err) {
    console.log("Error on creating prompt ", err);
    return NextResponse.json(
      {
        message: "Error on creating prompt",
      },
      { status: 500 }
    );
  }
}
