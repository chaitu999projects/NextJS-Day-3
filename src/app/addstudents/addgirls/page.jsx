"use client";

import React, { useState, useEffect } from "react";

const GirlsForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/collage/students/girls', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, rollNumber })
      });
      
      if (response.ok) {
        setName("");
        setAge("");
        setRollNumber("");
        alert("Form submitted successfully!");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-purple-200 p-8 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-purple-200 rounded"></div>
            <div className="h-4 bg-purple-100 rounded"></div>
            <div className="h-12 bg-purple-100 rounded"></div>
            <div className="h-4 bg-purple-100 rounded"></div>
            <div className="h-12 bg-purple-100 rounded"></div>
            <div className="h-4 bg-purple-100 rounded"></div>
            <div className="h-12 bg-purple-100 rounded"></div>
            <div className="h-12 bg-purple-300 rounded mt-6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4">
      <form 
        onSubmit={submitForm}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-purple-200"
      >
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
          <h2 className="text-2xl font-bold text-white text-center">
            Girls Student Registration
          </h2>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
              placeholder="Enter full name"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-700">
              Age
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              min="16"
              max="25"
              className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
              placeholder="Enter age"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-700">
              Roll Number
            </label>
            <input
              type="text"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
              placeholder="Enter roll number"
            />
          </div>
          
          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl active:scale-95 transform"
          >
            Register Student
          </button>
        </div>
        
        <div className="bg-purple-50 p-4 text-center text-xs text-purple-600">
          All information will be kept confidential
        </div>
      </form>
    </div>
  );
};

export default GirlsForm;