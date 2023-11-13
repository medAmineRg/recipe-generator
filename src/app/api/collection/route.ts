import prisma from "@/utils/connect";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest) => {

    try {
        const token = await getToken({ req })
        if (!token) return NextResponse.json({ message: "Not Authorized" }, { status: 401 })
        const recipes = await prisma.recipe.findMany({ where: { userEmail: token.email! } })
        return NextResponse.json(recipes)
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}