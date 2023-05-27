import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const {searchParams} = new URL(request.url);
    const id = params.id;
    const format = searchParams.get('format') || 'png';

    if(!id || id.length!=4 || isNaN(parseInt(id)) || parseInt(id) < 0 || parseInt(id) > 9999)
        return NextResponse.json({message: `The avatar id ${id} cannot be found! Avatar id should be between 0000 and 9999 (inclusive).`}, {status: 400});

    if(format != 'png' && format != 'json')
        return NextResponse.json({message: "Unknown format! Only 'png' and 'json' format are accepted. "}, {status: 400});
    
    return NextResponse.redirect(`https://localhost:3000/public/avatar/avatar_${id}.png`);
}