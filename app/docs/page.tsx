'use client'

import { motion } from 'framer-motion'
import { BackgroundBeams } from '@/components/ui/aceternity/background-beams'
import { TextGenerateEffect } from '@/components/ui/aceternity/text-generate-effect'

export default function DocsPage() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4">
      <BackgroundBeams className="opacity-40" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <TextGenerateEffect words="Documentation Coming Soon" />
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          We're working hard to bring you comprehensive documentation for Bugzer's AI-powered testing capabilities. Our documentation will include:
        </p>
        <ul className="text-left text-gray-300 space-y-4 mb-8">
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">→</span>
            Detailed API references
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">→</span>
            Step-by-step integration guides
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">→</span>
            Best practices for AI-powered testing
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">→</span>
            Advanced configuration options
          </li>
        </ul>
        <p className="text-gray-400">
          Stay tuned! We'll notify you when our documentation is ready.
        </p>
      </motion.div>
    </div>
  )
}