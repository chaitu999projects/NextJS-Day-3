"use client";

import React, { useState, useEffect } from 'react';

const AddBoys = () => {
    const [isClient, setIsClient] = useState(false);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const studentDataHandler = async(e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const res = await fetch("/api/collage/students/boys", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name, age, rollNumber})
            });

            if(res.ok) {
                setName("");
                setAge("");
                setRollNumber("");
                alert("Student added successfully!");
            } else {
                throw new Error("Failed to submit form");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (!isClient) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                <div className="text-blue-500 text-lg">Loading form...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
            <form 
                onSubmit={studentDataHandler}
                className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-200"
            >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6">
                    <h2 className="text-2xl font-bold text-white text-center">
                        Boys Student Registration
                    </h2>
                </div>
                
                <div className="p-8 space-y-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-blue-700">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                            placeholder="Enter full name"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-blue-700">
                            Age
                        </label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            min="16"
                            max="25"
                            className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                            placeholder="Enter age"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-blue-700">
                            Roll Number
                        </label>
                        <input
                            type="text"
                            value={rollNumber}
                            onChange={(e) => setRollNumber(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                            placeholder="Enter roll number"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-4 rounded-lg font-bold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl active:scale-95 transform ${
                            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                    >
                        {isSubmitting ? "Submitting..." : "Register Student"}
                    </button>
                </div>
                
                <div className="bg-blue-50 p-4 text-center text-xs text-blue-600">
                    All information will be kept confidential
                </div>
            </form>
        </div>
    );
};

export default AddBoys;