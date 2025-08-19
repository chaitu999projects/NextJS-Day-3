import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Welcome to <span className="text-indigo-600">Your Student Portal</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500">
            Access your courses, grades, and academic resources all in one place.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors">
              Go to Dashboard
            </Link>
            <Link href="/courses" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 transition-colors">
              Browse Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Course Materials', icon: '📚', link: '/materials' },
            { title: 'Assignment Hub', icon: '📝', link: '/assignments' },
            { title: 'Grade Tracker', icon: '📊', link: '/grades' },
            { title: 'Campus Resources', icon: '🏛️', link: '/resources' },
          ].map((item) => (
            <Link 
              key={item.title}
              href={item.link}
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="px-4 py-5 sm:p-6 flex items-center">
                <span className="text-3xl mr-4">{item.icon}</span>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">View all {item.title.toLowerCase()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;