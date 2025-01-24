'use client'

import { motion } from 'framer-motion'
import { InfiniteMovingCards } from '@/components/ui/aceternity/infinite-moving-cards'

const features = [
  {
    title: 'User Behavior Simulation',
    description: 'Our agent navigates your website, executing user-provided instructions and simulating real user interactions.',
    icon: '🕹️'
  },
  {
    title: 'Comprehensive Analysis',
    description: 'Collect data on network performance, console logs, and generate insights on accessibility and SEO.',
    icon: '📊'
  },
  {
    title: 'Actionable Reports',
    description: 'Receive detailed reports with prioritized recommendations to improve your website\'s performance and user experience.',
    icon: '📈'
  },
  {
    title: 'AI-Powered Insights',
    description: 'Leverage machine learning algorithms to predict potential issues and suggest proactive improvements.',
    icon: '🧠'
  },
  {
    title: 'Cross-Browser Testing',
    description: 'Ensure your website performs flawlessly across all major browsers and devices.',
    icon: '🌐'
  },
  {
    title: 'Continuous Monitoring',
    description: 'Set up automated tests to run periodically and receive alerts on any performance regressions.',
    icon: '🔄'
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
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover what makes Bugzer the ultimate website testing solution
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

