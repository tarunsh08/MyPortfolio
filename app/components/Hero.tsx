import React from 'react'

export default function Hero() {
  return (
    <section id='home' className='mt-20'>
      <article className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-5xl md:text-6xl font-bold text-center mb-16'>Welcome
      <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
      </article>
      <p className='text-gray-300 pt-2 text-xl'>
        Hi, I am a Full-Stack Web Dev with expertise in building seamless web applications. I bridge the gap between design and functionality to deliver high-performance digital experiences. Let’s build something amazing together!</p>
    </section>
  )
}
