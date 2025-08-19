
import girlsModel from "@/app/models/Girls";
import { DBconnection } from "@/app/utils/config/db";
import { NextResponse } from "next/server";

const dbCon = () => {
    return DBconnection()
}

dbCon();

export async function GET() {
    const allGirlsData = await girlsModel.find({})
    return NextResponse.json({allGirlsData})
}

export async function POST(req) {

    const {name, age, rollNumber} = await req.json()
    await girlsModel.create({
        name,
        age,
        rollNumber
    })
    return NextResponse.json({success:"Student Enrolled successfully!"})
}

export async function PUT(req) {
    const studentID = req.nextUrl.searchParams.get("id"); // remember _id
    const {newName:name, newAge:age} = await req.json();
    await girlsModel.findByIdAndUpdate(studentID, {name, age})
    return NextResponse.json({success:"Student Details Upadated!"})
}

export async function DELETE(req) {
    const studentID = req.nextUrl.searchParams.get("id");
    await girlsModel.findByIdAndDelete(studentID);

    return NextResponse.json({success: "Student romoved successfully!"})
}