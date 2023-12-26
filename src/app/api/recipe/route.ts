export const maxDuration = 10; // This function can run for a maximum of 5 seconds

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
        const user = await prisma.user.findFirst({ where: { email: token.email as string, } })

        if (user?.nbrOfRecipes === 0) {
            return NextResponse.json({ message: "You have generated 3 meals" }, { status: 400 })
        }

        const { ingredients } = await req.json()
        const response = await openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt: `create a detailed one recipe (with only the following ingredients) ${ingredients.join(" ")} in following json format :
        {
        "recipeName": // string,
        "ingredients": // array of strings,
        "additionalIngredients": // you can add additional Ingredients (max 3) and should be an array of strings,
        "steps": // array of strings max 10 steps
        }
        `,
            max_tokens: 1000
        });
        const recipe = JSON.parse(response.choices[0].text)
        const img = await fetchData(recipe.recipeName)
        const imgURL = img.openai.items[0].image_resource_url;
        await prisma.recipe.create({
            data: {
                imgURL,
                ...recipe,
                userEmail: token?.email
            }
        })
        await prisma.user.update({
            where: { email: token.email as string }, // Specify conditions to find the record
            data: {
                nbrOfRecipes: {
                    decrement: 1, // Decrement by the desired value
                },
            },
        });

        return NextResponse.json({ ...recipe, imgURL }, { status: 201 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ "message": "Something went wrong while creating the recipes" }, { status: 500 })
    }
}

// const recipe = {
//     recipeName: "Cheese Omelette",
//     ingredients: ["Eggs", "Cheese"],
//     additionalIngredients: [
//         "Salt",
//         "Pepper",
//         "Chopped vegetables (e.g., bell peppers)",
//     ],
//     steps: [
//         "Step 1: Crack the eggs into a bowl and beat them.",
//         "Step 2: Heat a non-stick skillet over medium heat.",
//         "Step 3: Pour the beaten eggs into the skillet.",
//         "Step 4: Let the eggs cook undisturbed until the edges start to set.",
//         "Step 5: Add your choice of additional ingredients, such as cheese, salt, pepper, and chopped vegetables.",
//         "Step 6: Carefully fold the omelette over the ingredients to create a half-moon shape.",
//         "Step 7: Continue cooking until the omelette is fully set but still moist inside.",
//         "Step 8: Slide the omelette onto a plate, and it's ready to serve!",
//     ],
//     imgURL: "https://d14uq1pz7dzsdq.cloudfront.net/eccde9ce-3970-40f6-9757-b0d71381d777_.png?Expires=1701357861&Signature=sY5IvxPCIdm0lnsvJewgOxW4o~LY8SaSIZ69LEt9Lxth56hN2uSXGsFa5XQHqyxQToJj2Dec-vvn7uf0-pzBTaFNrJFDzT02Msla5NOEbSRYD3t3t5JnfYMNtD-ciU3M19KXmch1Z2poHAdMepAHE4k~noPwP9I8Q5sHsmq21ZE4Yum2aQlPZelOkQvfUUaAmQPVfXSl51hB9j7Rr6Ch7Pz7OG~ElaHJ4QJQuA2R7CvPiCoBSe5Ay8W1e5FgiqWLhc9G95V6VtiOtYcPk7HYH30x-arGSXaRd4NFEfmRS81PWquqg~zsjA-xD-fuRgRXevq8oQ91p12irzZA-xUfiQ__&Key-Pair-Id=K1F55BTI9AHGIK"
// };