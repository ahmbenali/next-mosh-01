import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: string };
}

// *** GET SINGLE PRODUCT ***
export const GET = async (req: NextRequest, { params: { id } }: Props) => {
  if (+id > 10)
    return NextResponse.json({ msg: "Product not found" }, { status: 404 });

  return NextResponse.json({ msg: "product found" }, { status: 200 });
};

// *** UPDATE SINGLE PRODUCT ***
export const PUT = async (req: NextRequest, { params: { id } }: Props) => {
  // grab the body content
  const body = await req.json();

  // validate body inputs
  const validation = schema.safeParse(body);
  // invalid inputs data
  if (!validation.success)
    NextResponse.json(validation.error.errors, { status: 400 });

  // product not found
  if (+id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  // product found and updated
  return NextResponse.json(
    { msg: "Product updated", name: "Sweat", price: 10 },
    { status: 200 },
  );
};

// *** DELETE SINGLE PRODUCT ***
export const DELETE = async (req: NextRequest, { params: { id } }: Props) => {
  const body = await req.json();

  // product not found
  if (+id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  // product found and deleted
  return NextResponse.json({ msg: "Product deleted" }, { status: 200 });
};
