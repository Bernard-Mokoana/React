import React from 'react'

function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <form action="#" method="POST" className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
          ></textarea>
          <button type="submit" className="bg-blue-500 px-6 py-3 rounded text-white hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact