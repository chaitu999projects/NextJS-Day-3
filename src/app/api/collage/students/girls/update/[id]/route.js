import girlsModel from "@/app/models/Girls";
import { NextResponse } from "next/server";

export const GET = async(req, context) => {
    const id = context.params.id;
    const getStudent = await girlsModel.findById(id);
    return NextResponse.json({getStudent})
}