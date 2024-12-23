
import connectDB from "@/lib/config/db";
import TodoModel from "@/lib/models/todo.model";
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
export async function POST(request) {

    const { title, description } = await request.json()

    await TodoModel.create({
        title,
        description
    })

    return NextResponse.json({
        message: "TODO created"
    })
}

