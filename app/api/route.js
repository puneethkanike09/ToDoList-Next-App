
import connectDB from "@/lib/config/db";
import { NextResponse } from "next/server";

const loadDB = async () => {
    await connectDB()
}

loadDB()

export async function GET(request) {
    return NextResponse.json({
        message: "Hello World with get method"
    })
}