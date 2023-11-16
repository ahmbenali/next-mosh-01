import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { randomUUID } from 'crypto';

// *** GET ALL PRODUCTS ***
export const GET = async (req: NextRequest) => {
  // we return a hard coded data, since no db is available
  return NextResponse.json(
    {
      msg: "Products found",
      products: [
        { id: 1, name: "Milk", price: 2.3 },
        { id: 2, name: "Bread", price: 2 },
        { id: 3, name: "Green Tea", price: 5.5 },
      ],
    },
    { status: 200 },
  );
};

// *** CREATE A NEW PRODUCT ***
export const POST = async (req: NextRequest) => {
  // grab the body content input by user
  const body = await req.json();
  // validate body
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json(
    {
      // msg: "Product created",
      // product:

      id: randomUUID(),
      name: body.name,
      price: body.price,
    },
    { status: 201 },
  );
};
