import Link from 'next/link';
import { FiDownload, FiSearch, FiFilter, FiBookOpen } from 'react-icons/fi';

const MaterialsPage = () => {
  // Sample course materials data
  const courses = [
    {
      id: 1,
      title: 'Introduction to Computer Science',
      code: 'CS101',
      materials: [
        { name: 'Lecture 1 Slides', type: 'slides', date: '2023-09-15', size: '2.4 MB' },
        { name: 'Syllabus', type: 'document', date: '2023-09-01', size: '1.1 MB' },
        { name: 'Assignment 1', type: 'assignment', date: '2023-09-20', size: '350 KB' },
      ]
    },
    {
      id: 2,
      title: 'Advanced Mathematics',
      code: 'MATH202',
      materials: [
        { name: 'Chapter 1 Notes', type: 'notes', date: '2023-09-10', size: '3.2 MB' },
        { name: 'Problem Set 1', type: 'assignment', date: '2023-09-17', size: '1.5 MB' },
      ]
    },
    {
      id: 3,
      title: 'Modern Literature',
      code: 'LIT150',
      materials: [
        { name: 'Reading List', type: 'document', date: '2023-09-05', size: '800 KB' },
        { name: 'Analysis Template', type: 'template', date: '2023-09-12', size: '1.2 MB' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <FiBookOpen className="mr-2 text-indigo-600" />
            Course Materials
          </h1>
          <div className="relative w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search materials..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-2">
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FiFilter className="mr-2" />
              Filter
            </button>
            <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>All Courses</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>{course.code}: {course.title}</option>
              ))}
            </select>
          </div>
          <div className="text-sm text-gray-500">
            Showing {courses.reduce((acc, course) => acc + course.materials.length, 0)} materials
          </div>
        </div>

        {/* Course Materials List */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {courses.map(course => (
            <div key={course.id} className="border-b border-gray-200 last:border-b-0">
              <div className="px-4 py-5 sm:px-6 bg-gray-50">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {course.code} - {course.title}
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {course.materials.map((material, index) => (
                  <div key={index} className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                          <span className="text-indigo-600">
                            {material.type === 'slides' ? '📊' : 
                             material.type === 'assignment' ? '📝' : '📄'}
                          </span>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">{material.name}</h4>
                          <p className="text-sm text-gray-500">
                            {material.type.charAt(0).toUpperCase() + material.type.slice(1)} • {material.date} • {material.size}
                          </p>
                        </div>
                      </div>
                      <button className="ml-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <FiDownload className="mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MaterialsPage;