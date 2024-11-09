import React from 'react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left Side - Text Content */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4 text-justify">
          Welcome to our financial tracker platform. We aim to simplify the process of tracking your income and expenses, helping you make smarter financial decisions. Our easy-to-use interface allows you to manage your finances, track spending, and save more.
        </p>
        <p className="text-lg text-gray-700 mb-4 text-justify">
          Whether you're saving for a big purchase, planning your next vacation, or simply want to stay on top of your budget, we've got you covered. Our tool gives you insights into where your money is going and where you can improve. With automatic calculations, categories, and a user-friendly dashboard, you can stay organized and informed.
        </p>
        <p className="text-lg text-gray-700 mb-6 text-justify">
          Join thousands of other users who are taking control of their financial future. It's time to turn your financial goals into reality.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center items-center">
        <img 
          src="./Images/About.jpg" 
          alt="Financial Management" 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
  )
}
