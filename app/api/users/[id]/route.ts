import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: string };
}
// *** GET METHOD ***
export async function GET(req: NextRequest, { params: { id } }: Props) {
  // fetch data from a db
  // if not found, return 404 error
  // else return data

  // since we do not use any db, we simulate it with if condition
  if (+id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 10, name: "Ahmed" }, { status: 200 });
}

// *** PUT METHOD ***
export async function PUT(req: NextRequest, { params: { id } }: Props) {
  // validate the request body
  // if invalid, return 400 (bad request)
  // fetch the user with the given id from a db
  // update the user
  // return the updated user

  const body = await req.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      // show only errors messages
      validation.error.errors.map((err) => err.message),
      { status: 400 },
    );

  /*  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 }) */
  if (+id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(
    { msg: "user updated", id: 10, name: "Sara" },
    { status: 201 },
  );
}

// *** DELETE METHOD ***
export async function DELETE(req: NextRequest, { params: { id } }: Props) {
  if (+id > 10)
    return NextResponse.json({ error: "User is required" }, { status: 400 });

  return NextResponse.json({ msg: "user deleted", id }, { status: 200 });
}
