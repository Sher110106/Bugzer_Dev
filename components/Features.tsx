'use client'

import { motion } from 'framer-motion'
import { InfiniteMovingCards } from '@/components/ui/aceternity/infinite-moving-cards'

const features = [
  {
    title: 'AI-Powered Navigation',
    description: 'Our autonomous AI agent navigates your website like a real user, understanding context and performing complex interactions.',
    icon: '🤖'
  },
  {
    title: 'Natural Language Instructions',
    description: 'Simply tell Bugzer what to test in plain English, and watch as it executes complex testing scenarios.',
    icon: '💬'
  },
  {
    title: 'Automated VM Infrastructure',
    description: 'Tests run in isolated, secure virtual machines that spin up on demand for consistent and reliable results.',
    icon: '🖥️'
  },
  {
    title: 'Scheduled Testing',
    description: 'Set up automated cron jobs to regularly test your site after deployments or updates.',
    icon: '⏰'
  },
  {
    title: 'Comprehensive Analysis',
    description: 'Get detailed reports on performance, accessibility, user experience, and potential issues.',
    icon: '📊'
  },
  {
    title: 'Visual Regression Testing',
    description: 'AI-powered visual comparison detects unwanted changes in your UI across updates.',
    icon: '👁️'
  },
  {
    title: 'Context-Aware Testing',
    description: 'Our AI understands your applications context and can test complex user flows automatically.',
    icon: '🧠'
  },
  {
    title: 'Real-time Monitoring',
    description: 'Get instant alerts when issues are detected during automated testing runs.',
    icon: '📡'
  }
]

export default function Features() {
  return (
    <section className="py-12 md:py-20 px-4 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI-Powered Testing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the future of web testing with our autonomous AI agent
          </p>
        </motion.div>
        
        <div className="-mx-4 sm:mx-0">
          <InfiniteMovingCards 
            items={features} 
            direction="left" 
            speed="slow" 
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  )
}

