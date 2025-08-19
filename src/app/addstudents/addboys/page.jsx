"use client"

import React, { useState, useEffect } from 'react'

const AddBoys = () => {
    const [isClient, setIsClient] = useState(false)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [rollNumber, setRollNumber] = useState("")

    useEffect(() => {
        setIsClient(true)
    }, [])

    const studentDataHandler = async(e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:3000/api/collage/students/boys", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, age, rollNumber})
        })

        setName("")
        setAge("")
        setRollNumber("")
        if(res.ok) {
            alert("Form submitted successfully!")
        }
    }

    if (!isClient) {
        return <div>Loading...</div> // Or any other loading/placeholder content
    }

    return (
        <div className='w-full h-full flex items-center'>
            <form className='flex flex-col items-center justify-center w-full h-full' onSubmit={studentDataHandler}>
                <label className="text-left text-pink-500">Name</label>
                <input 
                    className='border border-pink-400 rounded-lg p-3'  
                    type="text" 
                    onChange={(e)=>setName(e.target.value)}  
                    value={name} 
                />
                <label className="text-left text-pink-500">Age</label>
                <input 
                    className='border border-pink-400 rounded-lg p-3'  
                    type="text" 
                    onChange={(e)=>setAge(e.target.value)} 
                    value={age} 
                />
                <label className="text-left text-pink-500">Roll Number</label>
                <input 
                    className='border border-pink-400 rounded-lg p-3'  
                    type="text" 
                    onChange={(e)=>setRollNumber(e.target.value)} 
                    value={rollNumber} 
                />
                <button type='submit' className='mt-4 bg-pink-500 text-white px-4 py-2 rounded'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddBoys