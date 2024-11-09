import React from 'react'

export default function Contact() {
  return (
    <div>
    

      <div class="flex items-center justify-center mt-4 ">
  <form class="w-full max-w-lg p-8 bg-gray-100 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
    
    <div class="mb-4">
      <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
      <input type="text" id="name" placeholder="Your Name" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
    </div>
    
    <div class="mb-4">
      <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
      <input type="email" id="email" placeholder="Your Email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
    </div>
    
    <div class="mb-6">
      <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
      <textarea id="message" rows="4" placeholder="Your Message" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
    </div>
    
    <button type="submit" class="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
      Send Message
    </button>
  </form>
</div>

    </div>
  )
}
