import React from 'react';
import { FaBook, FaChartLine, FaComments, FaUser } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-950 text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">StudEdu</h2>
        <nav className="space-y-4">
          <a href="#" className="block hover:text-yellow-400">Dashboard</a>
          <a href="#" className="block hover:text-yellow-400">My Courses</a>
          <a href="#" className="block hover:text-yellow-400">Progress</a>
          <a href="#" className="block hover:text-yellow-400">Messages</a>
          <a href="#" className="block hover:text-yellow-400">Account</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-4">Welcome back, Kragen 👋</h1>
        <p className="text-gray-400 mb-10">Here’s what’s happening with your learning today.</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-yellow-500/20 transition">
            <FaBook className="text-yellow-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold">Courses Enrolled</h3>
            <p className="text-gray-400 mt-2">4 Active Courses</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-yellow-500/20 transition">
            <FaChartLine className="text-blue-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold">Progress</h3>
            <p className="text-gray-400 mt-2">78% Completed</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-yellow-500/20 transition">
            <FaComments className="text-green-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold">Messages</h3>
            <p className="text-gray-400 mt-2">2 Unread Chats</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-yellow-500/20 transition">
            <FaUser className="text-purple-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold">Profile</h3>
            <p className="text-gray-400 mt-2">Student Mode</p>
          </div>
        </div>

        {/* Placeholder for future widgets */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Continue Learning</h2>
          <div className="bg-gray-800 p-6 rounded-lg text-gray-400">
            🚀 Coming soon: personalized learning track and progress visualizations!
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
