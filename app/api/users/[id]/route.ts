import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: string };
}
//# *** GET SINGLE USER ***
export async function GET(req: NextRequest, { params: { id } }: Props) {
  // fetch data from a db
  // if not found, return 404 error
  // else return data

  const user = await prisma.user.findUnique({ where: { id: id } });

  // if user is falsy
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(
    { msg: "User found", name: user.name },
    { status: 200 },
  );
}

//# *** UPDATE SINGLE USER***
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

  // find user with the params.id
  const user = await prisma.user.findUnique({ where: { id: id } });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { name: body.name, email: body.email },
  });
  return NextResponse.json(
    { msg: "user updated", updatedUser },
    { status: 200 },
  );
}

//# *** DELETE SINGLE USER ***
export async function DELETE(req: NextRequest, { params: { id } }: Props) {
  // check if the user already exists
  const user = await prisma.user.findUnique({ where: { id: id } });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 400 });

  const deletedUser = await prisma.user.delete({
    where: { id: id },
  });
  return NextResponse.json(
    { msg: `User ${deletedUser.name} deleted` },
    { status: 200 },
  );
}
