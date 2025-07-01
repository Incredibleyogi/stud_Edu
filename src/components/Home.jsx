import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import codeImg from '../assets/code.jpg'
import { Bar } from 'react-chartjs-2'
import Footer from '../components/Footer'; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Home = () => {
  const [quote, setQuote] = useState("")

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch("https://api.quotable.io/random?tags=motivational|technology")
        const data = await res.json()
        setQuote(`${data.content} — ${data.author}`)
      } catch (err) {
        setQuote("Stay focused and keep learning! — StudEdu")
      }
    }
    fetchQuote()
  }, [])

  const data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Java', 'Android'],
    datasets: [
      {
        label: 'Students Enrolled',
        data: [1200, 900, 1500, 1100, 800, 600],
        backgroundColor: 'rgba(59,130,246,0.6)',
        borderRadius: 5
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    }
  }

  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col items-center justify-start pt-20 px-6 space-y-16">

      {/* Hero Section */}
      <section className="text-center max-w-4xl relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empower Your Future With <span className="text-blue-400">Coding Skills</span>
        </h1>
        <p className="text-gray-300 mb-6">
          Learn from anywhere at your own pace with hands-on projects, quizzes, and expert feedback.
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <Link to="/signup">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition">Learn More</button>
          </Link>
          <Link to="/contact">
            <button className="bg-gray-800 border border-gray-500 px-6 py-2 rounded hover:bg-gray-700 transition">Book a Demo</button>
          </Link>
        </div>

        {/* 👇 Hero Image with Quote Overlay */}
        <div className="w-full max-w-4xl mx-auto relative">
          <img 
            src={codeImg}
            alt="Coding Education"
            className="rounded-xl shadow-xl object-cover w-full max-h-[400px]"
          />

          {/* 👇 Floating Quote on Top of Image */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4">
            <p className="text-sm md:text-base text-white bg-black/60 px-6 py-2 rounded-lg backdrop-blur-sm italic animate-glitch max-w-3xl text-center border border-white/20 shadow-md">
              {quote}
            </p>
          </div>
        </div>
      </section>

      {/* Sample Courses */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-4">Popular Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: 'Android App Development', price: 1199 },
            { title: 'Java', price: 1199 },
            { title: 'HTML in 2 hours', price: 599 }
          ].map((course, idx) => (
            <div key={idx} className="bg-gray-800 p-4 rounded shadow hover:scale-105 transition-transform">
              <h3 className="text-lg font-bold mb-2">{course.title}</h3>
              <p className="text-gray-400">By Himanshu Sangwan</p>
              <p className="mt-2 text-yellow-400">Rs. {course.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats + Graph Section */}
      <section className="w-full max-w-5xl mt-10">
        <h2 className="text-2xl font-semibold mb-4">Platform Stats</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded shadow">
            <p className="text-lg mb-2">📈 Students Enrolled in Each Course</p>
            <Bar data={data} options={options} />
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <div className="bg-gray-800 p-4 rounded text-center">
              <p className="text-3xl font-bold">5000+</p>
              <p className="text-gray-400">Total Enrollments</p>
            </div>
            <div className="bg-gray-800 p-4 rounded text-center">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-gray-400">Active Instructors</p>
            </div>
            <div className="bg-gray-800 p-4 rounded text-center">
              <p className="text-3xl font-bold">30+</p>
              <p className="text-gray-400">Courses Available</p>
            </div>
          </div>
        </div>
        <Footer />
      </section>
       
    </div>
  )
}

export default Home
