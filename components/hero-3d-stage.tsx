'use client'

import { useLanguage } from '@/contexts/language-context'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { AboutSection } from './about-section'
import { BlogSection } from './blog-section'
import { CaseStudiesSection } from './case-studies-section'
import { ContactSection } from './contact-section'
import { CTASection } from './cta-section'
import { DashboardMockup } from './dashboard-mockup'
import { Footer } from './footer'
import { Navbar } from './navbar'
import { ServicesSection } from './services-section'

export function Hero3DStage() {
	const [yOffset, setYOffset] = useState(0)
	const [mounted, setMounted] = useState(false)
	const { theme } = useTheme()
	const { t } = useLanguage()

	useEffect(() => {
		setMounted(true)
	}, [])

	const currentTheme = mounted ? theme : 'dark'

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY
			const offset = Math.min(scrollY / 300, 1) * -20
			setYOffset(offset)
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const baseTransform = {
		translateX: 2,
		scale: 1.2,
		rotateX: 47,
		rotateY: 31,
		rotateZ: 324,
	}

	const heroPills = [
		t('hero.pill1'),
		t('hero.pill2'),
		t('hero.pill3'),
		t('hero.pill4'),
		t('hero.pill5'),
		t('hero.pill6'),
		t('hero.pill7'),
		t('hero.pill8'),
	]

	if (!mounted) return null

	return (
		<>
			<section
				id='hero-top'
				className='relative min-h-screen overflow-hidden bg-white dark:bg-[#09090B] transition-colors duration-300'
			>
				<Navbar />

				{/* Subtle glow */}
				<div
					className='absolute pointer-events-none'
					style={{
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -30%)',
						width: '1200px',
						height: '800px',
						background:
							currentTheme === 'dark'
								? 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)'
								: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
					}}
				/>

				{/* Main content */}
				<div className='relative z-10 pt-28 flex flex-col'>
					{/* Hero text */}
					<div className='w-full flex justify-center px-6 mt-16'>
						<div className='w-full max-w-7xl'>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className='inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6'
							>
								<span className='w-2 h-2 rounded-full bg-blue-500 animate-pulse' />
								<span className='text-sm text-blue-500 font-medium'>
									Vision Digital Group
								</span>
							</motion.div>
							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								className='text-4xl md:text-5xl lg:text-[56px] font-bold text-gray-900 dark:text-white leading-[1.1] text-balance'
							>
								{t('hero.title')}
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 }}
								className='mt-6 text-lg text-gray-600 dark:text-zinc-400 max-w-2xl'
							>
								{t('hero.subtitle')}
							</motion.p>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className='mt-8 flex flex-wrap items-center gap-4'
							>
								<button
									onClick={() =>
										document
											.getElementById('contact')
											?.scrollIntoView({
												behavior: 'smooth',
											})
									}
									className='px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white font-semibold rounded-xl transition-opacity text-sm shadow-lg shadow-blue-500/25'
								>
									{t('hero.cta')}
								</button>
								<button
									onClick={() =>
										document
											.getElementById('portfolio')
											?.scrollIntoView({
												behavior: 'smooth',
											})
									}
									className='flex items-center gap-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium'
								>
									{t('hero.secondary')}
									<span aria-hidden='true'>→</span>
								</button>
							</motion.div>

							{/* Quick service pills */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.35 }}
								className='mt-10 flex flex-wrap gap-2'
							>
								{heroPills.map(s => (
									<span
										key={s}
										className='text-xs px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 rounded-full border border-gray-200 dark:border-zinc-700'
									>
										{s}
									</span>
								))}
							</motion.div>
						</div>
					</div>

					{/* 3D Dashboard Stage */}
					<div
						className='relative mt-16'
						style={{
							width: '100vw',
							marginLeft: '-50vw',
							marginRight: '-50vw',
							position: 'relative',
							left: '50%',
							right: '50%',
							height: '700px',
							marginTop: '-60px',
						}}
					>
						<div
							className='absolute bottom-0 left-0 right-0 h-72 z-10 pointer-events-none'
							style={{
								background:
									currentTheme === 'dark'
										? 'linear-gradient(to top, #09090B 20%, transparent 100%)'
										: 'linear-gradient(to top, #ffffff 20%, transparent 100%)',
							}}
						/>

						<div
							style={{
								transform: `translateY(${yOffset}px)`,
								transition: 'transform 0.1s ease-out',
								contain: 'strict',
								perspective: '4000px',
								perspectiveOrigin: '100% 0',
								width: '100%',
								height: '100%',
								transformStyle: 'preserve-3d',
								position: 'relative',
							}}
						>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									delay: 0.5,
									duration: 1,
									ease: [0.22, 1, 0.36, 1],
								}}
								style={{
									backgroundColor: '#09090B',
									transformOrigin: '0 0',
									backfaceVisibility: 'hidden',
									WebkitBackfaceVisibility: 'hidden',
									border: '1px solid #1e1e1e',
									borderRadius: '10px',
									width: '1600px',
									height: '900px',
									margin: '280px auto auto',
									position: 'absolute',
									top: 0,
									bottom: 0,
									left: 0,
									right: 0,
									transform: `translate(${baseTransform.translateX}%) scale(${baseTransform.scale}) rotateX(${baseTransform.rotateX}deg) rotateY(${baseTransform.rotateY}deg) rotate(${baseTransform.rotateZ}deg)`,
									transformStyle: 'preserve-3d',
									overflow: 'hidden',
								}}
							>
								<DashboardMockup />
							</motion.div>
						</div>
					</div>

					{/* All Sections */}
					<AboutSection />
					<ServicesSection />
					<CaseStudiesSection />
					<BlogSection />
					<ContactSection />
					<CTASection />
					<Footer />
				</div>
			</section>
		</>
	)
}
