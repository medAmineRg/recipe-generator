import { NextRequest, NextResponse } from "next/server";
import OpenAIApi from 'openai';
import axios from 'axios';
import { getToken } from "next-auth/jwt";
import prisma from "@/utils/connect";

const openai = new OpenAIApi({ apiKey: process.env.OPENAI_API_KEY });

async function fetchData(text: string) {
    const body = {
        response_as_dict: true,
        attributes_as_list: false,
        show_original_response: false,
        providers: "openai",
        resolution: "512x512",
        text,
        num_images: 1
    }
    const response = await axios.post('https://api.edenai.run/v2/image/generation', body, { headers: { "Authorization": `Bearer ${process.env.EDEN_API_KEY}` } });
    return response.data;
}

export const POST = async (req: NextRequest) => {
    try {
        const token = await getToken({ req })
        if (!token) return NextResponse.json({ message: "Not Authorized" }, { status: 403 })
        const user = await prisma.user.findFirst({ where: { email: token.email as string } })
        console.log(user);

        // const { ingredients } = await req.json()
        // const response = await openai.completions.create({
        //     model: 'gpt-3.5-turbo-instruct',
        //     prompt: `create a detailed one recipe with only the following ingredients ${ingredients.join(" ")} in following json format :
        // // add additionalIngredients (max 3)
        // {
        // "recipeName": // string,
        // "ingredients": // array of strings,
        // "additionalIngredients": // array of strings,
        // "steps": // array of strings max 10 steps
        // }`,
        //     max_tokens: 1000
        // });
        // const recipe = JSON.parse(response.choices[0].text)
        // const img = await fetchData(recipe.recipeName)
        // const imgURL = img.openai.items[0].image_resource_url;
        // await prisma.recipe.create({
        //     data: {
        //         imgURL,
        //         ...recipe,
        //         userEmail: token?.email
        //     }
        // })
        // return NextResponse.json({ ...recipe, imgURL }, { status: 201 })
        return NextResponse.json({ message: "ok" }, { status: 201 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ "message": "Something went wrong while creating the recipes" }, { status: 500 })
    }
}

const recipe = {
    recipeName: "Cheese Omelette",
    ingredients: ["Eggs", "Cheese"],
    additionalIngredients: [
        "Salt",
        "Pepper",
        "Chopped vegetables (e.g., bell peppers)",
    ],
    steps: [
        "Step 1: Crack the eggs into a bowl and beat them.",
        "Step 2: Heat a non-stick skillet over medium heat.",
        "Step 3: Pour the beaten eggs into the skillet.",
        "Step 4: Let the eggs cook undisturbed until the edges start to set.",
        "Step 5: Add your choice of additional ingredients, such as cheese, salt, pepper, and chopped vegetables.",
        "Step 6: Carefully fold the omelette over the ingredients to create a half-moon shape.",
        "Step 7: Continue cooking until the omelette is fully set but still moist inside.",
        "Step 8: Slide the omelette onto a plate, and it's ready to serve!",
    ],
};