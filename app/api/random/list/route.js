import { NextResponse } from "next/server";
import { getJson, getJsonDetail, getRandomId } from "@/functions/helper";

export async function GET(request) {
    const {searchParams} = new URL(request.url);
    const countStr = searchParams.get('count') || 5; 
    const detail = searchParams.get('detail') || 'false'; 
    
    if(detail !== 'true' && detail !== 'false')
        return NextResponse.json({message: "The 'detail' parameter should be boolean (true or false)!"}, {status: 400});

    const count = parseInt(countStr);
    if(isNaN(count) || count < 1 || count > 50) {
        return NextResponse.json({message: "The 'count' parameter should be between 1 to 50 (inclusive)!"}, {status: 400});
    }

    const idList = [];

    for(let i = 0; i < count; i++) 
        idList.push(getRandomId());

    if(detail === 'false')
        return NextResponse.json(idList.map((id) => {
            return getJson(id);
        }));
    
    return NextResponse.json(idList.map((id) => {
        return getJsonDetail(id);
    }));
}