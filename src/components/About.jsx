// src/components/About.jsx
import React from 'react'
import { FaLaptopCode, FaChalkboardTeacher, FaUsers } from 'react-icons/fa'
import Aboutimg from '../assets/about.png'
const About = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-yellow-400">About StudEdu</h1>
          <p className="text-gray-300 text-lg">
            Empowering learners and creators worldwide to master coding skills, build real-world projects, and shape tomorrow’s tech landscape.
          </p>
        </header>

        {/* Mission Section */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={Aboutimg}
            alt="Coding Mission"
            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md"
          />
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-gray-300">
              At StudEdu, we believe everyone deserves access to high-quality coding education. Whether you're a beginner or a pro instructor, our platform offers a supportive space to learn, teach, and grow.
            </p>
            <button className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition">
              Explore Our Courses
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FaLaptopCode className="mx-auto text-4xl text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hands-on Learning</h3>
            <p className="text-gray-300">
              Build real projects from day one, with exercises and quizzes designed to replay the learning curve and boost confidence.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FaChalkboardTeacher className="mx-auto text-4xl text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-300">
              Learn from industry pros who guide you through challenges, share career advice, and help you level up fast.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FaUsers className="mx-auto text-4xl text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-300">
              Join a vibrant community—get feedback, collaborate in group projects, and grow together with fellow students.
            </p>
          </div>
        </section>

        {/* Team / Credentials (optional) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-center">Meet the Team</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            Our team of educators, developers, and content creators is united by one goal: to make coding accessible, enjoyable, and impactful. We're passionate about helping you succeed.
          </p>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <button
            onClick={() => window.location.href = '/signup'}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Join StudEdu Today
          </button>
        </section>

      </div>
    </div>
  )
}

export default About
