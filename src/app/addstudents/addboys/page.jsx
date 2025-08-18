"use client"

import React, { useState } from 'react'

const addBoys = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("");
    const [rollNumber, setRollNumber] = useState("");

    const studentDataHandler = async(e) => {
        e.preventDefault();
        const res = await fetch("https://students-details-ri1sdmemt-chaitu999projects-projects.vercel.app/api/collage/students/boys", {
            method:"POST",
            "Content-type": "application/json",
            body:JSON.stringify({name, age, rollNumber})
        })

        setName("")
        setAge("")
        setRollNumber("")
        if(res.ok) {
            alert("Form submitted successfully!")
        }

    }

  return (
    <div className='w-full h-full flex items-center'>
        <form className='flex flex-col items-center justify-center w-full h-full' onSubmit={studentDataHandler}>
            <labele className="text-left text-pink-500">Name</labele>
            
            <input className='border-pink-400 rounded-lg p-3'  type="text" onChange={(e)=>setName(e.target.value)}  value={name} />
            <labele className="text-left text-pink-500">age</labele>
            <input className='border-pink-400 rounded-lg p-3'  type="text" onChange={(e)=>setAge(e.target.value)} value={age} />
            <labele className="text-left text-pink-500">Roll Number</labele>
            <input className='border-pink-400 rounded-lg p-3'  type="text" onChange={(e)=>setRollNumber(e.target.value)} value={rollNumber} />
            <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default addBoys