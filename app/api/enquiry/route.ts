import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const enquiry = await request.json();

    if (!enquiry.name || !enquiry.phone) {
      return NextResponse.json(
        { message: "Name and phone number are required." },
        { status: 400 },
      );
    }

    console.log("New Sukhi Yatra enquiry:", enquiry);

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been received.",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: "Unable to process enquiry." },
      { status: 500 },
    );
  }
}