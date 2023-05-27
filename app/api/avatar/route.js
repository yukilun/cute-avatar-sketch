import { NextResponse } from "next/server";
import options from '@/public/options.json';

export async function GET() {
    return NextResponse.json({ options });
}