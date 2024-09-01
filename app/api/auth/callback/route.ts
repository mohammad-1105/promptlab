// app/api/callback/route.ts

import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import UserModel from "@/models/user.model";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

interface User {
  id: string;
  email: string;
  family_name: string;
  given_name: string;
  picture: string;
  username: string | undefined;
  phone_number: string | undefined;
}
export async function GET(request: NextRequest) {
  try {
    // connect db first
    await connectDB();

    // Construct the absolute URL for redirection
    const homeUrl = new URL("/", request.nextUrl.origin);

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    // Now check if the user already exists
    const existingUser = await UserModel.findOne({ email: user?.email });
    if(existingUser) {
      return NextResponse.redirect(homeUrl)
    }

    // create new user
    const newUser = await UserModel.create({
      kindeID: user?.id,
      firstName: user?.given_name,
      lastName: user?.family_name,
      email: user?.email,
      picture: user?.picture,
    })
    await newUser.save()

    // redirect user to homeURL after registered
    return NextResponse.redirect(homeUrl);
  } catch (error) {
    console.log("Error registering the user", error);
    return NextResponse.json(
      {
        message: "Error registering the User",
      },
      { status: 500 }
    );
  }
}
