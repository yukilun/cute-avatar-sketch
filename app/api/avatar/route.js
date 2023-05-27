import { NextResponse } from "next/server";
import { getPngUrl, getJsonDetail, convertOptionsToId } from "@/functions/helper";

export async function GET(request) {
    const {searchParams} = new URL(request.url);
    const face = searchParams.get('facial-expression') || null;
    const hair = searchParams.get('hairstyle') || null;
    const feature = searchParams.get('facial-feature') || null;
    const accessory = searchParams.get('accessory') || null;
    const format = searchParams.get('format') || 'png';

    if(!face || !hair || !feature || !accessory)
        return NextResponse.json({message: `Option(s) is/are missing. Please ensure to include all options (facial-expression,hairstyle,facial-feature,accessory)`}, {status: 400});

    if(format != 'png' && format != 'json')
        return NextResponse.json({message: "Unknown format! Only 'png' and 'json' format are accepted. "}, {status: 400});

    const id = convertOptionsToId(face, hair, feature, accessory);

    if(!id) 
        return NextResponse.json({message: `Invalid Option(s) for avatar!`}, {status: 400});

    if(format === 'png')
    return NextResponse.redirect(getPngUrl(id));

    return NextResponse.json(getJsonDetail(id));
}