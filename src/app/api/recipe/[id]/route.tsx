import prisma from "@/utils/connect";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    const token = await getToken({ req });
    if (!token)
      return NextResponse.json({ message: "Not Authorized" }, { status: 403 });
    const id = params.id;
    const recipe = await prisma.recipe.findFirst({
      where: { id },
    });
    if (!recipe)
      return NextResponse.json(
        { message: "Recipe not found" },
        { status: 404 },
      );

    return NextResponse.json(recipe);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
};
