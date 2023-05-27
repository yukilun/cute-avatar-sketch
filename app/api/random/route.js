import { NextResponse } from "next/server";
import { getPngUrl, getJsonDetail, getRandomId } from "@/functions/helper";

export async function GET(request) {
    const {searchParams} = new URL(request.url);
    const format = searchParams.get('format') || 'png';

    if(format != 'png' && format != 'json')
        return NextResponse.json({message: "Unknown format! Only 'png' and 'json' format are accepted. "}, {status: 400});
    
    const id = getRandomId();

    if(format === 'png')
        return NextResponse.redirect(getPngUrl(id));
    
    return NextResponse.json(getJsonDetail(id));
}