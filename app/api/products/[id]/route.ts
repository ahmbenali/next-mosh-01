import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: string };
}

//# *** GET SINGLE PRODUCT ***
async function GET(req: NextRequest, { params: { id } }: Props) {
  const product = await prisma.product.findUnique({
    where: { id: +id },
  });
  if (!product)
    return NextResponse.json({ msg: "Product not found" }, { status: 404 });

  return NextResponse.json(
    { msg: `product ${product.name} is found` },
    { status: 200 },
  );
}

//# *** UPDATE SINGLE PRODUCT ***
async function PUT(req: NextRequest, { params: { id } }: Props) {
  // grab the body content
  const body = await req.json();

  // validate body inputs
  const validation = schema.safeParse(body);
  // invalid inputs data
  if (!validation.success)
    NextResponse.json(validation.error.errors, { status: 400 });

  const product = await prisma.product.findUnique({ where: { id: +id } });
  // product not found
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  const updatedProduct = await prisma.product.update({
    where: { id: +id },
    data: {
      name: body.name,
      price: body.price,
    },
  });
  // product found and updated
  return NextResponse.json(
    { msg: `Product ${updatedProduct.name} is updated` },
    { status: 200 },
  );
}

//# *** DELETE SINGLE PRODUCT ***
async function DELETE(req: NextRequest, { params: { id } }: Props) {
  const body = await req.json();

  const product = await prisma.product.findUnique({
    where: { id: +id },
  });
  // product not found
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  const deletedProduct = await prisma.product.delete({ where: { id: +id } });
  // product found and deleted
  return NextResponse.json(
    { msg: `Product ${deletedProduct.name} is deleted` },
    { status: 200 },
  );
}

export { DELETE, GET, PUT };

