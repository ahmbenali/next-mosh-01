import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

//# *** GET ALL PRODUCTS ***
export async function GET(req: NextRequest) {
  const products = await prisma.product.findMany();

  return NextResponse.json(
    {
      msg: "Products found",
      products,
    },
    { status: 200 },
  );
}

//# *** CREATE A NEW PRODUCT ***
export async function POST(req: NextRequest) {
  // grab the body content input by user
  const body = await req.json();
  // validate body
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // check if the product already exists
  const product = await prisma.product.findUnique({
    where: { name: body.name },
  });

  if (product)
    NextResponse.json({ msg: "Product already exists" }, { status: 400 });

  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(
    {
      msg: `Product ${newProduct.name} is created`,
    },
    { status: 201 },
  );
}
