import boysModel from "@/app/models/Boys";
import { NextResponse } from "next/server";

export const GET = async(req, context) => {
    const id = context.params.id;
    const student = await boysModel.findById(id)
    return NextResponse.json({student})
}