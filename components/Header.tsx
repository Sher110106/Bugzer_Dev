'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`fixed top-0 w-full border-b border-border/40 backdrop-blur z-50 transition-colors duration-200 ${scrolled ? 'bg-background/95 supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Bugzer</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </motion.button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center justify-between space-x-4">
          <nav className="flex items-center space-x-6">
            <Link href="/features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/docs" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Documentation
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-sm text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Sign In
            </Button>
            <Button className="text-sm bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute top-14 left-0 right-0 bg-gray-900/95 backdrop-blur-lg md:hidden border-b border-border/40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                href="/features"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/docs"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Documentation
              </Link>
              <div className="flex flex-col space-y-4 pt-4 border-t border-border/40">
                <Button
                  variant="ghost"
                  className="text-sm text-gray-300 hover:text-white w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Button>
                <Button
                  className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}