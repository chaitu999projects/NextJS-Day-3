import boysModel from "@/app/models/Boys";
import { DBconnection } from "@/app/utils/config/db";
import { NextResponse } from "next/server";

const dbCon = () => {
    return DBconnection()
}

dbCon();

export async function GET() {
    const allBoysData = await boysModel.find({})
    return NextResponse.json({allBoysData})
}

export async function POST(req) {

    const {name, age, rollNumber} = await req.json()
    await boysModel.create({
        name,
        age,
        rollNumber
    })
    return NextResponse.json({success:"Student Enrolled successfully!"})
}

export async function PUT(req) {
    const studentID = req.nextUrl.searchParams.get("id"); 
    const {newName:name, newAge:age, newRollNumber:rollNumber} = await req.json();
    await boysModel.findByIdAndUpdate(studentID, {name, age, rollNumber})
    return NextResponse.json({success:"Student Details Upadated!"})
}

export async function DELETE(req) {
    try {
        const studentID = req.nextUrl.searchParams.get("id");
        await boysModel.findByIdAndDelete(studentID);
        return NextResponse.json({success: "Student romoved successfully!"})

    } catch (error) {
      
        console.log("Student not found!", error);
        return NextResponse.json({success: "Student not found successfully!"})
        
    }

    
}

