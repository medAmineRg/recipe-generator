import { NextRequest, NextResponse } from "next/server";
import OpenAIApi from 'openai';

// const openai = new OpenAIApi({ apiKey: process.env.OPENAI_API_KEY });

export const GET = async (req: NextRequest, res: NextResponse) => {
    // const response = await openai.completions.create({
    //     model: 'gpt-3.5-turbo-instruct',
    //     prompt: `create a detailed one recipe with only the following ingredients eggs tomato salt in following json format :
    //     {
    //        ingredients:,
    //        method:
    //     }`,
    //     max_tokens: 1000
    // });
    // const jsonRes = (response.choices[0].text)
    // console.log(jsonRes);


    // console.log(jsonRes);

    return NextResponse.json({ "message": "get route" })
}