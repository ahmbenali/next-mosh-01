import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// if we remove req parameter, since it is not used, next will cache the response of this request.
// *** GET ALL USERS ***
export const GET = async (req: NextRequest) => {
  // fetch users from a db
  return NextResponse.json([
    { id: 1, name: "Mido" },
    { id: 2, name: "Sara" },
  ]);
};

// *** CREATE A NEW USER ***
export const POST = async (req: NextRequest) => {
  const body = await req.json();
  // validate user inputs (body)
  const validation = schema.safeParse(body);
  // if invalid, return 400 (bad request)
  if (!validation.success)
    // if (!body.name)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // else, return created data completely or partially
  return NextResponse.json(
    { msg: "user created", name: body.name },
    { status: 201 },
  );
};
