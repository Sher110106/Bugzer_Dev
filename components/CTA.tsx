'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Spotlight } from '@/components/ui/aceternity/spotlight'
import { TextGenerateEffect } from '@/components/ui/aceternity/text-generate-effect'

export default function CTA() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <section className="py-20 px-4 text-center relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <TextGenerateEffect words="Ready to Optimize Your Website?" />
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Start testing your website today and unlock its full potential with Bugzer.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-64 bg-gray-700 text-white border-gray-600"
            required
          />
          <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
            Try Bugzer Now
          </Button>
        </form>
      </motion.div>
    </section>
  )
}

