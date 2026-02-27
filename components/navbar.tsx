'use client'

import { useLanguage } from '@/contexts/language-context'
import { Code2, Globe, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-[#09090B]/80 backdrop-blur-md transition-colors duration-300">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-500" />
            <span className="text-gray-900 dark:text-white font-semibold">Digital Group</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('technologies')} className="text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              {t('nav.solutions')}
            </button>
            <button onClick={() => scrollToSection('workflows')} className="text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              {t('nav.technologies')}
            </button>
            <button onClick={() => scrollToSection('products')} className="text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              {t('nav.portfolio')}
            </button>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800"
                title={t('nav.selectLanguage')}
              >
                <Globe className="w-5 h-5" />
              </button>
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-lg z-50">
                  <button
                    onClick={() => {
                      setLanguage('en')
                      setLanguageMenuOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === 'en'
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('uz')
                      setLanguageMenuOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === 'uz'
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800'
                    }`}
                  >
                    Uzbek
                  </button>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800"
              aria-label="Toggle theme"
            >
              <Sun className="w-5 h-5 block dark:hidden" />
              <Moon className="w-5 h-5 hidden dark:block" />
            </button>

            <a
              href="#contact"
              className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg border border-blue-700/50 transition-colors font-medium"
            >
              {t('nav.getInTouch')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-1">
            {/* Language Switcher - Mobile */}
            <div className="relative">
              <button 
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Globe className="w-5 h-5" />
              </button>
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-lg z-50">
                  <button
                    onClick={() => {
                      setLanguage('en')
                      setLanguageMenuOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === 'en'
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('uz')
                      setLanguageMenuOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === 'uz'
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800'
                    }`}
                  >
                    Uzbek
                  </button>
                </div>
              )}
            </div>

            {/* Theme Toggle - Mobile */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="w-5 h-5 block dark:hidden" />
              <Moon className="w-5 h-5 hidden dark:block" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Slide in from left */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            style={{ top: '64px', zIndex: 40 }}
          />
          
          {/* Slide in menu - from left */}
          <div className="fixed left-0 top-16 w-64 h-[calc(100vh-64px)] bg-white dark:bg-[#09090B]/95 backdrop-blur-lg border-r border-gray-200 dark:border-zinc-800 md:hidden shadow-2xl z-40 overflow-y-auto animate-in slide-in-from-left duration-300">
            <div className="flex flex-col h-full">
              <nav className="flex flex-col divide-y divide-gray-200 dark:divide-zinc-800/50">
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium"
                >
                  {t('nav.services')}
                </button>
                <button 
                  onClick={() => scrollToSection('technologies')} 
                  className="text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium"
                >
                  {t('nav.solutions')}
                </button>
                <button 
                  onClick={() => scrollToSection('workflows')} 
                  className="text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium"
                >
                  {t('nav.technologies')}
                </button>
                <button 
                  onClick={() => scrollToSection('products')} 
                  className="text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium"
                >
                  {t('nav.portfolio')}
                </button>
              </nav>
              
              <div className="mt-auto p-6 border-t border-gray-200 dark:border-zinc-800/50">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-white bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-lg border border-blue-700/50 transition-colors text-center font-medium"
                >
                  {t('nav.getInTouch')}
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
