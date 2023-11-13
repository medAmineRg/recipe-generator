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
        const { ingredients } = await req.json()
        const response = await openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt: `create a detailed one recipe with only the following ingredients ${ingredients.join(" ")} salt in following json format :
        // add additionalIngredients (max 3)
        {
        "recipeName": // string,
        "ingredients": // array of strings,
        "additionalIngredients": // array of strings,
        "steps": // array of strings max 10 steps
        }`,
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
        return NextResponse.json({ ...recipe, imgURL }, { status: 201 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ "message": "get route" }, { status: 500 })
    }
}