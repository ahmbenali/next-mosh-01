import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// if we remove req parameter, since it is not used, next will cache the response of this request.
//# *** GET ALL USERS ***
export async function GET(req: NextRequest) {
  // fetch all users from a db
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

//# *** CREATE A NEW USER ***
export async function POST(req: NextRequest) {
  const body = await req.json();
  // validate user inputs (body)
  const validation = schema.safeParse(body);
  // if invalid, return 400 (bad request)
  if (!validation.success)
    // if (!body.name)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // check if the user already exists
  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });
  // if yes
  if (user)
    return NextResponse.json({ msg: "User already exists" }, { status: 400 });

  // else create new user and return it  completely or partially
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json({ msg: "User created", newUser }, { status: 201 });
}
