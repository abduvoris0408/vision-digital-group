'use client'

import { useLanguage } from '@/contexts/language-context'
import { motion } from 'framer-motion'
import { Award, Target, Users, Zap } from 'lucide-react'

export function AboutSection() {
	const { t } = useLanguage()

	const stats = [
		{ value: t('about.stat1.value'), label: t('about.stat1.label') },
		{ value: t('about.stat2.value'), label: t('about.stat2.label') },
		{ value: t('about.stat3.value'), label: t('about.stat3.label') },
		{ value: t('about.stat4.value'), label: t('about.stat4.label') },
	]

	const values = [
		{
			icon: Target,
			title: t('about.val1.title'),
			description: t('about.val1.desc'),
			color: 'text-blue-500',
			bg: 'bg-blue-500/10',
		},
		{
			icon: Users,
			title: t('about.val2.title'),
			description: t('about.val2.desc'),
			color: 'text-purple-500',
			bg: 'bg-purple-500/10',
		},
		{
			icon: Zap,
			title: t('about.val3.title'),
			description: t('about.val3.desc'),
			color: 'text-cyan-500',
			bg: 'bg-cyan-500/10',
		},
		{
			icon: Award,
			title: t('about.val4.title'),
			description: t('about.val4.desc'),
			color: 'text-emerald-500',
			bg: 'bg-emerald-500/10',
		},
	]

	return (
		<section
			id='about'
			className='relative py-32 px-6 bg-white dark:bg-[#09090B] transition-colors duration-300 overflow-hidden'
		>
			{/* Background decoration */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full' />
				<div className='absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full' />
			</div>

			<div className='max-w-7xl mx-auto relative z-10'>
				{/* Header */}
				<div className='grid lg:grid-cols-2 gap-16 items-center mb-24'>
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
					>
						<div className='flex items-center gap-2 mb-4'>
							<div className='w-2 h-2 rounded-full bg-blue-500' />
							<span className='text-sm text-blue-500 font-medium tracking-wider uppercase'>
								{t('about.whoWeAre')}
							</span>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6'>
							{t('about.title')}
						</h2>
						<p className='text-lg text-gray-600 dark:text-zinc-400 leading-relaxed mb-6'>
							{t('about.p1')}
						</p>
						<p className='text-gray-500 dark:text-zinc-500 leading-relaxed'>
							{t('about.p2')}
						</p>
						<div className='mt-8 flex gap-4'>
							<button
								onClick={() =>
									document
										.getElementById('contact')
										?.scrollIntoView({ behavior: 'smooth' })
								}
								className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors text-sm'
							>
								{t('about.workWithUs')}
							</button>
							<button
								onClick={() =>
									document
										.getElementById('portfolio')
										?.scrollIntoView({ behavior: 'smooth' })
								}
								className='px-6 py-3 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 hover:border-blue-500 hover:text-blue-500 rounded-xl transition-colors text-sm font-medium'
							>
								{t('about.seeOurWork')}
							</button>
						</div>
					</motion.div>

					{/* Stats grid */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.1 }}
						className='grid grid-cols-2 gap-6'
					>
						{stats.map((stat, i) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: 0.2 + i * 0.1,
								}}
								className='bg-gray-50 dark:bg-zinc-900/60 border border-gray-100 dark:border-zinc-800 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-colors'
							>
								<div className='text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2'>
									{stat.value}
								</div>
								<div className='text-sm text-gray-500 dark:text-zinc-500'>
									{stat.label}
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* Values */}
				<div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='text-center mb-12'
					>
						<h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3'>
							{t('about.whyTitle')}
						</h3>
						<p className='text-gray-500 dark:text-zinc-500'>
							{t('about.whySubtitle')}
						</p>
					</motion.div>
					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{values.map((item, i) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								className='bg-gray-50 dark:bg-zinc-900/40 border border-gray-100 dark:border-zinc-800 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-gray-100 dark:hover:bg-zinc-900/70 transition-all group'
							>
								<div
									className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mb-4`}
								>
									<item.icon
										className={`w-5 h-5 ${item.color}`}
									/>
								</div>
								<h4 className='font-semibold text-gray-900 dark:text-white mb-2 text-sm'>
									{item.title}
								</h4>
								<p className='text-xs text-gray-500 dark:text-zinc-500 leading-relaxed'>
									{item.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
