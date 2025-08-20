"use client"

import React, { useEffect, useState } from 'react'

const GirlsPage = () => {
  const [allGirls, setAllGirls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the base URL for API calls
  const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.origin;
    }
    return process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  };

  const allGirlsDataFn = async() => {
    try {
      setLoading(true);
      const baseUrl = getBaseUrl();
      const res = await fetch(`${baseUrl}/api/collage/students/girls`);
      
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
      }
      
      const data = await res.json();
      console.log(data.allGirlsData);
      
      setAllGirls(data.allGirlsData || []);
      setError(null);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message);
      setAllGirls([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    allGirlsDataFn();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-pink-700">Loading student data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full text-center">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-red-600 mb-2">Error Loading Data</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={allGirlsDataFn}
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-700 mb-2">Girls Student Records</h1>
          <p className="text-purple-500">Total Students: {allGirls.length}</p>
          <button 
            onClick={allGirlsDataFn}
            className="mt-4 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center mx-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh Data
          </button>
        </div>

        {allGirls.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-6xl mb-4">👩‍🎓</div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">No Student Records Found</h2>
            <p className="text-gray-500">There are no girls student records in the database yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allGirls.map((student, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden border border-pink-100 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 text-white">
                  <h3 className="text-xl font-bold truncate">{student.name}</h3>
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-4">
                    <div className="bg-pink-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-semibold">{student.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Age</p>
                      <p className="font-semibold">{student.age} years</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Roll Number</p>
                      <p className="font-semibold">{student.rollNumber}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-pink-50 px-5 py-3 text-sm text-pink-700">
                  Student ID: {student._id || 'N/A'}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GirlsPage;