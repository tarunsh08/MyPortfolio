import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id='home' className='mt-20'>
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-5xl md:text-6xl font-bold text-center mb-16'
      >
        Welcome
        <motion.div 
          initial={{ width: '0%' }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1.5 }}
          className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
        />
      </motion.article>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='text-gray-300 pt-2 text-xl'
      >
        Hi, I am a Full-Stack Web Dev with expertise in building seamless web applications. Let's build something amazing together!
      </motion.p>
    </section>
  )
}
