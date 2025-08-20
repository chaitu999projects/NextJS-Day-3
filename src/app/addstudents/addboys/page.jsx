"use client"

import React, { useState, useEffect } from 'react'

const AddBoys = () => {
    const [isClient, setIsClient] = useState(false)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [rollNumber, setRollNumber] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const studentDataHandler = async(e) => {
        e.preventDefault();
        setIsSubmitting(true)
        setSubmitStatus(null)
        
        try {
            const res = await fetch("/api/collage/students/boys", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name, age, rollNumber})
            })

            if(res.ok) {
                setSubmitStatus("success")
                setName("")
                setAge("")
                setRollNumber("")
            } else {
                setSubmitStatus("error")
            }
        } catch (error) {
            setSubmitStatus("error")
            console.error("Submission error:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (!isClient) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
            <div className="max-w-lg mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                        <h1 className="text-2xl font-bold">Add New Student</h1>
                        <p className="text-blue-100 mt-1">Enter the student's information below</p>
                    </div>
                    
                    <div className="p-6 md:p-8">
                        {/* Status Messages */}
                        {submitStatus === "success" && (
                            <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-start">
                                <div className="bg-emerald-100 p-2 rounded-full mr-3">
                                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-emerald-800">Success!</p>
                                    <p className="text-emerald-700 text-sm mt-1">Student information has been added successfully.</p>
                                </div>
                            </div>
                        )}
                        
                        {submitStatus === "error" && (
                            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                                <div className="bg-red-100 p-2 rounded-full mr-3">
                                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-red-800">Error!</p>
                                    <p className="text-red-700 text-sm mt-1">There was a problem submitting the form. Please try again.</p>
                                </div>
                            </div>
                        )}
                        
                        {/* Form */}
                        <form onSubmit={studentDataHandler} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                        placeholder="Enter student's full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Age</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="number"
                                        required
                                        min="5"
                                        max="25"
                                        className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                        placeholder="Enter age"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Roll Number</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                        placeholder="Enter roll number"
                                        value={rollNumber}
                                        onChange={(e) => setRollNumber(e.target.value)}
                                    />
                                </div>
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                                    isSubmitting 
                                        ? 'bg-blue-400 cursor-not-allowed text-white' 
                                        : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-md hover:shadow-lg'
                                }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        
                                        Register
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
                
                <div className="mt-6 text-center text-sm text-gray-600">
                    <p>All student information will be stored securely in our database.</p>
                </div>
            </div>
        </div>
    )
}

export default AddBoys