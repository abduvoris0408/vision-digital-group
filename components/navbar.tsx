// 'use client'

// import { useLanguage } from '@/contexts/language-context'
// import { ChevronDown, Globe, Menu, Moon, Sun, X } from 'lucide-react'
// import { useTheme } from 'next-themes'
// import Image from 'next/image'
// import { useEffect, useRef, useState } from 'react'

// export function Navbar() {
// 	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
// 	const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
// 	const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
// 	const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
// 	const [mounted, setMounted] = useState(false)
// 	const { theme, setTheme } = useTheme()
// 	const { language, setLanguage, t } = useLanguage()
// 	const dropdownRef = useRef<HTMLDivElement>(null)

// 	useEffect(() => {
// 		setMounted(true)
// 	}, [])

// 	useEffect(() => {
// 		function handleClickOutside(event: MouseEvent) {
// 			if (
// 				dropdownRef.current &&
// 				!dropdownRef.current.contains(event.target as Node)
// 			) {
// 				setServicesDropdownOpen(false)
// 			}
// 		}
// 		document.addEventListener('mousedown', handleClickOutside)
// 		return () =>
// 			document.removeEventListener('mousedown', handleClickOutside)
// 	}, [])

// 	const scrollToSection = (sectionId: string) => {
// 		const element = document.getElementById(sectionId)
// 		if (element) {
// 			element.scrollIntoView({ behavior: 'smooth' })
// 		}
// 		setMobileMenuOpen(false)
// 	}

// 	const serviceItems = [
// 		{ label: t('services.dev.label'), section: 'services' },
// 		{ label: t('services.ai.label'), section: 'ai-section' },
// 		{ label: t('services.mkt.label'), section: 'workflows' },
// 	]

// 	if (!mounted) return null

// 	return (
// 		<nav className='fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-[#09090B]/80 backdrop-blur-md transition-colors duration-300 overflow-visible'>
// 			<div className='w-full flex justify-center px-6 py-4'>
// 				<div className='w-full max-w-7xl flex items-center justify-between'>
// 					{/* Logo */}
// 					<div className='flex items-center'>
// 						<Image
// 							src={
// 								theme === 'dark'
// 									? '/Logowhite.png'
// 									: '/Logoblack.png'
// 							}
// 							alt='Vision Digital Group'
// 							width={250}
// 							height={65}
// 							className='h-14 w-auto object-contain rounded-md p-1'
// 							priority
// 						/>
// 					</div>

// 					{/* Desktop Navigation */}
// 					<div className='hidden md:flex items-center gap-6'>
// 						<button
// 							onClick={() => scrollToSection('hero-top')}
// 							className='text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium'
// 						>
// 							{t('nav.home')}
// 						</button>
// 						<button
// 							onClick={() => scrollToSection('about')}
// 							className='text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium'
// 						>
// 							{t('nav.about')}
// 						</button>

// 						{/* Services Dropdown */}
// 						<div ref={dropdownRef} className='relative'>
// 							<button
// 								onClick={() =>
// 									setServicesDropdownOpen(
// 										!servicesDropdownOpen,
// 									)
// 								}
// 								className='text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium flex items-center gap-1'
// 							>
// 								{t('nav.services')}
// 								<ChevronDown
// 									className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}
// 								/>
// 							</button>
// 							{servicesDropdownOpen && (
// 								<div className='absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-xl z-50 overflow-hidden'>
// 									<div className='py-1'>
// 										{serviceItems.map(item => (
// 											<button
// 												key={item.section}
// 												onClick={() => {
// 													scrollToSection(
// 														item.section,
// 													)
// 													setServicesDropdownOpen(
// 														false,
// 													)
// 												}}
// 												className='block w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-zinc-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
// 											>
// 												{item.label}
// 											</button>
// 										))}
// 									</div>
// 								</div>
// 							)}
// 						</div>

// 						<button
// 							onClick={() => scrollToSection('portfolio')}
// 							className='text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium'
// 						>
// 							{t('nav.caseStudies')}
// 						</button>
// 						<button
// 							onClick={() => scrollToSection('blog')}
// 							className='text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium'
// 						>
// 							{t('nav.blog')}
// 						</button>
// 					</div>

// 					{/* Desktop CTA */}
// 					<div className='hidden md:flex items-center gap-2'>
// 						{/* Language Switcher */}
// 						<div className='relative'>
// 							<button
// 								onClick={() =>
// 									setLanguageMenuOpen(!languageMenuOpen)
// 								}
// 								className='p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800'
// 								title={t('nav.selectLanguage')}
// 							>
// 								<Globe className='w-5 h-5' />
// 							</button>
// 							{languageMenuOpen && (
// 								<div className='absolute right-0 mt-2 w-32 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-lg z-50'>
// 									<button
// 										onClick={() => {
// 											setLanguage('en')
// 											setLanguageMenuOpen(false)
// 										}}
// 										className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
// 											language === 'en'
// 												? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
// 												: 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800'
// 										}`}
// 									>
// 										English
// 									</button>
// 									<button
// 										onClick={() => {
// 											setLanguage('uz')
// 											setLanguageMenuOpen(false)
// 										}}
// 										className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
// 											language === 'uz'
// 												? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
// 												: 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800'
// 										}`}
// 									>
// 										Uzbek
// 									</button>
// 								</div>
// 							)}
// 						</div>

// 						{/* Theme Toggle */}
// 						<button
// 							onClick={() =>
// 								setTheme(theme === 'dark' ? 'light' : 'dark')
// 							}
// 							className='p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800'
// 							aria-label='Toggle theme'
// 						>
// 							<Sun className='w-5 h-5 block dark:hidden' />
// 							<Moon className='w-5 h-5 hidden dark:block' />
// 						</button>

// 						<button
// 							onClick={() => scrollToSection('contact')}
// 							className='text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg border border-blue-700/50 transition-colors font-medium'
// 						>
// 							{t('nav.contactUs')}
// 						</button>
// 					</div>

// 					{/* Mobile Menu Button */}
// 					<div className='md:hidden flex items-center gap-1'>
// 						<div className='relative'>
// 							<button
// 								onClick={() =>
// 									setLanguageMenuOpen(!languageMenuOpen)
// 								}
// 								className='p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors'
// 							>
// 								<Globe className='w-5 h-5' />
// 							</button>
// 							{languageMenuOpen && (
// 								<div className='absolute right-0 mt-2 w-32 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-lg z-50'>
// 									<button
// 										onClick={() => {
// 											setLanguage('en')
// 											setLanguageMenuOpen(false)
// 										}}
// 										className={`block w-full text-left px-4 py-2 text-sm transition-colors ${language === 'en' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800'}`}
// 									>
// 										English
// 									</button>
// 									<button
// 										onClick={() => {
// 											setLanguage('uz')
// 											setLanguageMenuOpen(false)
// 										}}
// 										className={`block w-full text-left px-4 py-2 text-sm transition-colors ${language === 'uz' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800'}`}
// 									>
// 										Uzbek
// 									</button>
// 								</div>
// 							)}
// 						</div>

// 						<button
// 							onClick={() =>
// 								setTheme(theme === 'dark' ? 'light' : 'dark')
// 							}
// 							className='p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors'
// 							aria-label='Toggle theme'
// 						>
// 							<Sun className='w-5 h-5 block dark:hidden' />
// 							<Moon className='w-5 h-5 hidden dark:block' />
// 						</button>

// 						<button
// 							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// 							className='p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors'
// 							aria-label='Toggle menu'
// 						>
// 							{mobileMenuOpen ? (
// 								<X className='w-5 h-5' />
// 							) : (
// 								<Menu className='w-5 h-5' />
// 							)}
// 						</button>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Mobile Navigation Menu */}
// 			{mobileMenuOpen && (
// 				<>
// 					<div
// 						className='fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm md:hidden animate-in fade-in duration-200'
// 						onClick={() => setMobileMenuOpen(false)}
// 						style={{ top: '64px', zIndex: 40 }}
// 					/>

// 					<div className='fixed left-0 top-16 w-72 h-[calc(100vh-64px)] bg-white dark:bg-[#09090B]/95 backdrop-blur-lg border-r border-gray-200 dark:border-zinc-800 md:hidden shadow-2xl z-40 overflow-y-auto animate-in slide-in-from-left duration-300'>
// 						<div className='flex flex-col h-full'>
// 							<nav className='flex flex-col divide-y divide-gray-200 dark:divide-zinc-800/50'>
// 								<button
// 									onClick={() => scrollToSection('hero-top')}
// 									className='text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium'
// 								>
// 									{t('nav.home')}
// 								</button>
// 								<button
// 									onClick={() => scrollToSection('about')}
// 									className='text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium'
// 								>
// 									{t('nav.about')}
// 								</button>

// 								{/* Mobile Services Accordion */}
// 								<div>
// 									<button
// 										onClick={() =>
// 											setMobileServicesOpen(
// 												!mobileServicesOpen,
// 											)
// 										}
// 										className='text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium w-full flex items-center justify-between'
// 									>
// 										{t('nav.services')}
// 										<ChevronDown
// 											className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
// 										/>
// 									</button>
// 									{mobileServicesOpen && (
// 										<div className='bg-gray-50 dark:bg-zinc-900/50'>
// 											{serviceItems.map(item => (
// 												<button
// 													key={item.section}
// 													onClick={() => {
// 														scrollToSection(
// 															item.section,
// 														)
// 														setMobileServicesOpen(
// 															false,
// 														)
// 													}}
// 													className='block w-full text-left py-3 px-10 text-sm text-gray-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
// 												>
// 													{item.label}
// 												</button>
// 											))}
// 										</div>
// 									)}
// 								</div>

// 								<button
// 									onClick={() => scrollToSection('portfolio')}
// 									className='text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium'
// 								>
// 									{t('nav.caseStudies')}
// 								</button>
// 								<button
// 									onClick={() => scrollToSection('blog')}
// 									className='text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium'
// 								>
// 									{t('nav.blog')}
// 								</button>
// 							</nav>

// 							<div className='mt-auto p-6 border-t border-gray-200 dark:border-zinc-800/50'>
// 								<button
// 									onClick={() => scrollToSection('contact')}
// 									className='block w-full text-sm text-white bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-lg border border-blue-700/50 transition-colors text-center font-medium'
// 								>
// 									{t('nav.contactUs')}
// 								</button>
// 							</div>
// 						</div>
// 					</div>
// 				</>
// 			)}
// 		</nav>
// 	)
// }
'use client'

import { useLanguage } from '@/contexts/language-context'
import {
	Globe,
	Menu,
	Moon,
	Sun,
	X,
	ChevronDown,
	Bot,
	TrendingUp,
	Code2,
	Mail,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
	const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
	const [mounted, setMounted] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const { theme, setTheme } = useTheme()
	const { language, setLanguage, t } = useLanguage()
	const dropdownRef = useRef<HTMLDivElement>(null)
	const langDesktopRef = useRef<HTMLDivElement>(null)
	const langMobileRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 10)
		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setServicesDropdownOpen(false)
			}
			if (
				langDesktopRef.current && !langDesktopRef.current.contains(event.target as Node) &&
				langMobileRef.current && !langMobileRef.current.contains(event.target as Node)
			) {
				setLanguageMenuOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) element.scrollIntoView({ behavior: 'smooth' })
		setMobileMenuOpen(false)
	}

	const serviceItems = [
		{
			label: t('services.dev.label'),
			section: 'services',
			icon: Code2,
			desc: t('services.dev.tagline'),
			color: 'text-blue-500',
			bg: 'bg-blue-500/10',
		},
		{
			label: t('services.ai.label'),
			section: 'ai-section',
			icon: Bot,
			desc: t('services.ai.tagline'),
			color: 'text-purple-500',
			bg: 'bg-purple-500/10',
		},
		{
			label: t('services.mkt.label'),
			section: 'workflows',
			icon: TrendingUp,
			desc: t('services.mkt.tagline'),
			color: 'text-emerald-500',
			bg: 'bg-emerald-500/10',
		},
	]

	if (!mounted) return null

	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible
			${scrolled
				? 'bg-white/90 dark:bg-[#09090B]/90 backdrop-blur-xl border-b border-gray-200/80 dark:border-zinc-800/80 shadow-sm'
				: 'bg-white/80 dark:bg-[#09090B]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800'
			}`}
		>
			<div className='w-full flex justify-center px-6 py-3'>
				<div className='w-full max-w-7xl flex items-center justify-between'>

					{/* Logo */}
					<div className='flex items-center'>
						<Image
							src={theme === 'dark' ? '/Logowhite.png' : '/Logoblack.png'}
							alt='Vision Digital Group'
							width={220}
							height={60}
							className='h-12 w-auto object-contain'
							priority
						/>
					</div>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center gap-1'>
						<button
							onClick={() => scrollToSection('hero-top')}
							className='px-3 py-2 text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800/70'
						>
							{t('nav.home')}
						</button>

						<button
							onClick={() => scrollToSection('about')}
							className='px-3 py-2 text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800/70'
						>
							{t('nav.about')}
						</button>

						{/* Services Dropdown */}
						<div ref={dropdownRef} className='relative'>
							<button
								onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
								className='flex items-center gap-1 px-3 py-2 text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800/70'
							>
								{t('nav.services')}
								<ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
							</button>

							{servicesDropdownOpen && (
								<div className='absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-2xl shadow-2xl z-50 p-2'>
									<p className='text-xs font-semibold text-gray-400 dark:text-zinc-600 uppercase tracking-wider px-3 py-2'>
										{t('services.whatWeDo')}
									</p>
									{serviceItems.map(item => (
										<button
											key={item.section}
											onClick={() => {
												scrollToSection(item.section)
												setServicesDropdownOpen(false)
											}}
											className='w-full flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800/60 transition-colors group text-left'
										>
											<div className={`w-9 h-9 ${item.bg} rounded-lg flex items-center justify-center shrink-0 mt-0.5`}>
												<item.icon className={`w-4 h-4 ${item.color}`} />
											</div>
											<div>
												<p className='text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors'>
													{item.label}
												</p>
												<p className='text-xs text-gray-500 dark:text-zinc-500 mt-0.5'>
													{item.desc}
												</p>
											</div>
										</button>
									))}
								</div>
							)}
						</div>

						<button
							onClick={() => scrollToSection('portfolio')}
							className='px-3 py-2 text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800/70'
						>
							{t('nav.caseStudies')}
						</button>

						<button
							onClick={() => scrollToSection('blog')}
							className='px-3 py-2 text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800/70'
						>
							{t('nav.blog')}
						</button>
					</div>

					{/* Desktop Right Side */}
					<div className='hidden md:flex items-center gap-1'>

						{/* Language Switcher */}
						<div className='relative' ref={langDesktopRef}>
							<button
								onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
								className='flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800/70 rounded-lg transition-all font-medium'
								title={t('nav.selectLanguage')}
							>
								<Globe className='w-4 h-4' />
								<span className='text-xs font-bold uppercase tracking-wide'>{language}</span>
							</button>
							{languageMenuOpen && (
								<div className='absolute right-0 mt-2 w-36 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-xl z-50 p-1'>
									{[
										{ code: 'en', label: '🇺🇸 English' },
										{ code: 'uz', label: "🇺🇿 O'zbek" },
									].map(lang => (
										<button
											key={lang.code}
											onClick={() => {
												setLanguage(lang.code as 'en' | 'uz')
												setLanguageMenuOpen(false)
											}}
											className={`flex w-full items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
												language === lang.code
													? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
													: 'text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800'
											}`}
										>
											{lang.label}
										</button>
									))}
								</div>
							)}
						</div>

						{/* Theme Toggle */}
						<button
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							className='p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800/70 rounded-lg transition-all'
							aria-label='Toggle theme'
						>
							<Sun className='w-4 h-4 block dark:hidden' />
							<Moon className='w-4 h-4 hidden dark:block' />
						</button>

						{/* Contact CTA */}
						<button
							onClick={() => scrollToSection('contact')}
							className='flex items-center gap-1.5 ml-1 text-sm text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-all font-medium shadow-md shadow-blue-500/20'
						>
							<Mail className='w-3.5 h-3.5' />
							{t('nav.contactUs')}
						</button>
					</div>

					{/* Mobile Right */}
					<div className='md:hidden flex items-center gap-1'>
						<div className='relative' ref={langMobileRef}>
							<button
								onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
								className='p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg'
							>
								<Globe className='w-5 h-5' />
							</button>
							{languageMenuOpen && (
								<div className='absolute right-0 mt-2 w-36 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-xl z-50 p-1'>
									{[
										{ code: 'en', label: '🇺🇸 English' },
										{ code: 'uz', label: "🇺🇿 O'zbek" },
									].map(lang => (
										<button
											key={lang.code}
											onClick={() => {
												setLanguage(lang.code as 'en' | 'uz')
												setLanguageMenuOpen(false)
											}}
											className={`flex w-full items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
												language === lang.code
													? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
													: 'text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800'
											}`}
										>
											{lang.label}
										</button>
									))}
								</div>
							)}
						</div>

						<button
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							className='p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg'
							aria-label='Toggle theme'
						>
							<Sun className='w-5 h-5 block dark:hidden' />
							<Moon className='w-5 h-5 hidden dark:block' />
						</button>

						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className='p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg'
							aria-label='Toggle menu'
						>
							{mobileMenuOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<>
					<div
						className='fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm md:hidden'
						onClick={() => setMobileMenuOpen(false)}
						style={{ top: '64px', zIndex: 40 }}
					/>
					<div className='fixed left-0 top-[64px] w-72 h-[calc(100vh-64px)] bg-white dark:bg-[#09090B] border-r border-gray-200 dark:border-zinc-800 md:hidden shadow-2xl z-50 overflow-y-auto'>
						<div className='flex flex-col h-full'>
							<nav className='flex flex-col divide-y divide-gray-200 dark:divide-zinc-800/50'>
								<button
									onClick={() => scrollToSection('hero-top')}
									className='text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium'
								>
									{t('nav.home')}
								</button>
								<button
									onClick={() => scrollToSection('about')}
									className='text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium'
								>
									{t('nav.about')}
								</button>

								{/* Mobile Services Accordion */}
								<div>
									<button
										onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
										className='w-full flex items-center justify-between text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium'
									>
										{t('nav.services')}
										<ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
									</button>
									{mobileServicesOpen && (
										<div className='bg-gray-50 dark:bg-zinc-900/50 px-4 py-2 space-y-1'>
											{serviceItems.map(item => (
												<button
													key={item.section}
													onClick={() => {
														scrollToSection(item.section)
														setMobileServicesOpen(false)
													}}
													className='w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-zinc-800/50 transition-all text-left'
												>
													<div className={`w-7 h-7 ${item.bg} rounded-md flex items-center justify-center shrink-0`}>
														<item.icon className={`w-3.5 h-3.5 ${item.color}`} />
													</div>
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
									{t('nav.caseStudies')}
								</button>
								<button
									onClick={() => scrollToSection('blog')}
									className='text-sm text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/10 transition-colors text-left py-4 px-6 font-medium'
								>
									{t('nav.blog')}
								</button>
							</nav>

							<div className='mt-auto p-6 border-t border-gray-200 dark:border-zinc-800/50'>
								<button
									onClick={() => scrollToSection('contact')}
									className='flex items-center justify-center gap-2 w-full text-sm text-white bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-lg border border-blue-700/50 transition-colors font-medium'
								>
									<Mail className='w-4 h-4' />
									{t('nav.contactUs')}
								</button>
							</div>
						</div>
					</div>
				</>
			)}
		</nav>
	)
}