'use client'

import { useLanguage } from '@/contexts/language-context'
import { ChevronDown, Globe, Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
	const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()
	const { language, setLanguage, t } = useLanguage()
	const dropdownRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setServicesDropdownOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () =>
			document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
		setMobileMenuOpen(false)
	}

	const serviceItems = [
		{ label: 'App & Web Development', section: 'services' },
		{ label: 'AI & Automation', section: 'ai-section' },
		{ label: 'Marketing & Growth', section: 'workflows' },
	]

	if (!mounted) return null

	return (
		<nav className='fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-[#09090B]/80 backdrop-blur-md transition-colors duration-300'>
			<div className='w-full flex justify-center px-6 py-3'>
				<div className='w-full max-w-6xl flex items-center justify-between'>
					{/* Logo */}
					<div className='flex items-center'>
						<Image
							src='/vision_digital_group_logo_adaptive.svg'
							alt='Vision Digital Group'
							width={250}
							height={65}
							className='h-14 w-auto object-contain  rounded-md p-1'
							priority
						/>
					</div>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center gap-6'>
						<button
							onClick={() => scrollToSection('hero-top')}
							className='text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium'
						>
							Home
						</button>
						<button
							onClick={() => scrollToSection('about')}
							className='text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium'
						>
							About Us
						</button>

						{/* Services Dropdown */}
						<div ref={dropdownRef} className='relative'>
							<button
								onClick={() =>
									setServicesDropdownOpen(
										!servicesDropdownOpen,
									)
								}
								className='text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium flex items-center gap-1'
							>
								Services
								<ChevronDown
									className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}
								/>
							</button>
							{servicesDropdownOpen && (
								<div className='absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-xl z-50 overflow-hidden'>
									<div className='py-1'>
										{serviceItems.map(item => (
											<button
												key={item.section}
												onClick={() => {
													scrollToSection(
														item.section,
													)
													setServicesDropdownOpen(
														false,
													)
												}}
												className='block w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-zinc-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
											>
												{item.label}
											</button>
										))}
									</div>
								</div>
							)}
						</div>

						<button
							onClick={() => scrollToSection('portfolio')}
							className='text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium'
						>
							Case Studies
						</button>
						<button
							onClick={() => scrollToSection('blog')}
							className='text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium'
						>
							Blog
						</button>
					</div>

					{/* Desktop CTA */}
					<div className='hidden md:flex items-center gap-2'>
						{/* Language Switcher */}
						<div className='relative'>
							<button
								onClick={() =>
									setLanguageMenuOpen(!languageMenuOpen)
								}
								className='p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800'
								title='Select Language'
							>
								<Globe className='w-5 h-5' />
							</button>
							{languageMenuOpen && (
								<div className='absolute right-0 mt-2 w-32 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-lg z-50'>
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
							onClick={() =>
								setTheme(theme === 'dark' ? 'light' : 'dark')
							}
							className='p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800'
							aria-label='Toggle theme'
						>
							<Sun className='w-5 h-5 block dark:hidden' />
							<Moon className='w-5 h-5 hidden dark:block' />
						</button>

						<button
							onClick={() => scrollToSection('contact')}
							className='text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg border border-blue-700/50 transition-colors font-medium'
						>
							Contact Us
						</button>
					</div>

					{/* Mobile Menu Button */}
					<div className='md:hidden flex items-center gap-1'>
						<div className='relative'>
							<button
								onClick={() =>
									setLanguageMenuOpen(!languageMenuOpen)
								}
								className='p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors'
							>
								<Globe className='w-5 h-5' />
							</button>
							{languageMenuOpen && (
								<div className='absolute right-0 mt-2 w-32 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-lg z-50'>
									<button
										onClick={() => {
											setLanguage('en')
											setLanguageMenuOpen(false)
										}}
										className={`block w-full text-left px-4 py-2 text-sm transition-colors ${language === 'en' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800'}`}
									>
										English
									</button>
									<button
										onClick={() => {
											setLanguage('uz')
											setLanguageMenuOpen(false)
										}}
										className={`block w-full text-left px-4 py-2 text-sm transition-colors ${language === 'uz' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800'}`}
									>
										Uzbek
									</button>
								</div>
							)}
						</div>

						<button
							onClick={() =>
								setTheme(theme === 'dark' ? 'light' : 'dark')
							}
							className='p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors'
							aria-label='Toggle theme'
						>
							<Sun className='w-5 h-5 block dark:hidden' />
							<Moon className='w-5 h-5 hidden dark:block' />
						</button>

						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className='p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors'
							aria-label='Toggle menu'
						>
							{mobileMenuOpen ? (
								<X className='w-5 h-5' />
							) : (
								<Menu className='w-5 h-5' />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{mobileMenuOpen && (
				<>
					<div
						className='fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm md:hidden animate-in fade-in duration-200'
						onClick={() => setMobileMenuOpen(false)}
						style={{ top: '64px', zIndex: 40 }}
					/>

					<div className='fixed left-0 top-16 w-72 h-[calc(100vh-64px)] bg-white dark:bg-[#09090B]/95 backdrop-blur-lg border-r border-gray-200 dark:border-zinc-800 md:hidden shadow-2xl z-40 overflow-y-auto animate-in slide-in-from-left duration-300'>
						<div className='flex flex-col h-full'>
							<nav className='flex flex-col divide-y divide-gray-200 dark:divide-zinc-800/50'>
								<button
									onClick={() => scrollToSection('hero-top')}
									className='text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium'
								>
									Home
								</button>
								<button
									onClick={() => scrollToSection('about')}
									className='text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium'
								>
									About Us
								</button>

								{/* Mobile Services Accordion */}
								<div>
									<button
										onClick={() =>
											setMobileServicesOpen(
												!mobileServicesOpen,
											)
										}
										className='text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium w-full flex items-center justify-between'
									>
										Services
										<ChevronDown
											className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
										/>
									</button>
									{mobileServicesOpen && (
										<div className='bg-gray-50 dark:bg-zinc-900/50'>
											{serviceItems.map(item => (
												<button
													key={item.section}
													onClick={() => {
														scrollToSection(
															item.section,
														)
														setMobileServicesOpen(
															false,
														)
													}}
													className='block w-full text-left py-3 px-10 text-sm text-gray-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
												>
													{item.label}
												</button>
											))}
										</div>
									)}
								</div>

								<button
									onClick={() => scrollToSection('portfolio')}
									className='text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium'
								>
									Case Studies
								</button>
								<button
									onClick={() => scrollToSection('blog')}
									className='text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium'
								>
									Blog
								</button>
							</nav>

							<div className='mt-auto p-6 border-t border-gray-200 dark:border-zinc-800/50'>
								<button
									onClick={() => scrollToSection('contact')}
									className='block w-full text-sm text-white bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-lg border border-blue-700/50 transition-colors text-center font-medium'
								>
									Contact Us
								</button>
							</div>
						</div>
					</div>
				</>
			)}
		</nav>
	)
}
