'use client'

import { useLanguage } from '@/contexts/language-context'
import { motion } from 'framer-motion'
import {
	ArrowUpRight,
	MessageSquare,
	ShoppingCart,
	Star,
	TrendingUp,
	Users,
} from 'lucide-react'

export function CaseStudiesSection() {
	const { t } = useLanguage()

	const caseStudies = [
		{
			id: 1,
			category: t('portfolio.cs1.category'),
			client: t('portfolio.cs1.client'),
			title: t('portfolio.cs1.title'),
			story: t('portfolio.cs1.story'),
			metrics: [
				{
					icon: ShoppingCart,
					value: t('portfolio.cs1.m1.value'),
					label: t('portfolio.cs1.m1.label'),
				},
				{
					icon: TrendingUp,
					value: t('portfolio.cs1.m2.value'),
					label: t('portfolio.cs1.m2.label'),
				},
				{
					icon: Star,
					value: t('portfolio.cs1.m3.value'),
					label: t('portfolio.cs1.m3.label'),
				},
			],
			tags: [t('footer.link.webDev'), 'SEO', 'Google Ads'],
			color: 'from-orange-500 to-pink-500',
			highlight: true,
		},
		{
			id: 2,
			category: t('portfolio.cs2.category'),
			client: t('portfolio.cs2.client'),
			title: t('portfolio.cs2.title'),
			story: t('portfolio.cs2.story'),
			metrics: [
				{
					icon: TrendingUp,
					value: t('portfolio.cs2.m1.value'),
					label: t('portfolio.cs2.m1.label'),
				},
				{
					icon: MessageSquare,
					value: t('portfolio.cs2.m2.value'),
					label: t('portfolio.cs2.m2.label'),
				},
				{
					icon: Users,
					value: t('portfolio.cs2.m3.value'),
					label: t('portfolio.cs2.m3.label'),
				},
			],
			tags: [
				t('footer.link.aiChatbots'),
				t('footer.link.crm'),
				'Automation',
			],
			color: 'from-purple-500 to-blue-500',
			highlight: false,
		},
		{
			id: 3,
			category: t('portfolio.cs3.category'),
			client: t('portfolio.cs3.client'),
			title: t('portfolio.cs3.title'),
			story: t('portfolio.cs3.story'),
			metrics: [
				{
					icon: TrendingUp,
					value: t('portfolio.cs3.m1.value'),
					label: t('portfolio.cs3.m1.label'),
				},
				{
					icon: ShoppingCart,
					value: t('portfolio.cs3.m2.value'),
					label: t('portfolio.cs3.m2.label'),
				},
				{
					icon: Users,
					value: t('portfolio.cs3.m3.value'),
					label: t('portfolio.cs3.m3.label'),
				},
			],
			tags: [t('footer.link.social'), t('footer.link.email'), 'Meta Ads'],
			color: 'from-pink-500 to-purple-500',
			highlight: false,
		},
		{
			id: 4,
			category: t('portfolio.cs4.category'),
			client: t('portfolio.cs4.client'),
			title: t('portfolio.cs4.title'),
			story: t('portfolio.cs4.story'),
			metrics: [
				{
					icon: TrendingUp,
					value: t('portfolio.cs4.m1.value'),
					label: t('portfolio.cs4.m1.label'),
				},
				{
					icon: Users,
					value: t('portfolio.cs4.m2.value'),
					label: t('portfolio.cs4.m2.label'),
				},
				{
					icon: Star,
					value: t('portfolio.cs4.m3.value'),
					label: t('portfolio.cs4.m3.label'),
				},
			],
			tags: [t('footer.link.appDev'), 'Mobile', 'UX Design'],
			color: 'from-cyan-500 to-teal-500',
			highlight: false,
		},
	]

	return (
		<section
			id='portfolio'
			className='relative py-32 px-6 bg-white dark:bg-[#09090B] transition-colors duration-300 overflow-hidden'
		>
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full' />
			</div>

			<div className='max-w-7xl mx-auto relative z-10'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='mb-16'
				>
					<div className='flex items-center gap-2 mb-4'>
						<div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
						<span className='text-sm text-emerald-500 font-medium'>
							{t('portfolio.realResults')}
						</span>
					</div>
					<div className='flex flex-col md:flex-row md:items-end justify-between gap-6'>
						<div>
							<h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
								{t('portfolio.title')}
							</h2>
							<p className='text-gray-500 dark:text-zinc-400 max-w-xl text-lg'>
								{t('portfolio.subtitle')}
							</p>
						</div>
						<button
							onClick={() =>
								document
									.getElementById('contact')
									?.scrollIntoView({ behavior: 'smooth' })
							}
							className='inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium text-sm hover:opacity-80 transition-opacity shrink-0'
						>
							{t('portfolio.startStory')}
							<ArrowUpRight className='w-4 h-4' />
						</button>
					</div>
				</motion.div>

				{/* Case studies grid */}
				<div className='grid md:grid-cols-2 gap-6'>
					{caseStudies.map((cs, i) => (
						<motion.div
							key={cs.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							className={`relative bg-gray-50 dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:border-gray-300 dark:hover:border-zinc-700 transition-all group ${
								cs.highlight ? 'md:col-span-2' : ''
							}`}
						>
							{/* Gradient strip on top */}
							<div
								className={`h-1 w-full bg-gradient-to-r ${cs.color}`}
							/>

							<div
								className={`p-8 ${cs.highlight ? 'md:grid md:grid-cols-2 md:gap-10' : ''}`}
							>
								<div>
									{/* Category + tags */}
									<div className='flex flex-wrap items-center gap-2 mb-4'>
										<span
											className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${cs.color} text-white`}
										>
											{cs.category}
										</span>
										<span className='text-xs text-gray-400 dark:text-zinc-500'>
											{cs.client}
										</span>
									</div>

									<h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight'>
										{cs.title}
									</h3>
									<p className='text-sm text-gray-500 dark:text-zinc-500 leading-relaxed mb-6'>
										{cs.story}
									</p>

									{/* Tags */}
									<div className='flex flex-wrap gap-2'>
										{cs.tags.map(tag => (
											<span
												key={tag}
												className='text-xs px-3 py-1 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full text-gray-600 dark:text-zinc-400'
											>
												{tag}
											</span>
										))}
									</div>
								</div>

								{/* Metrics */}
								<div
									className={`${cs.highlight ? 'flex flex-col justify-center mt-8 md:mt-0' : 'mt-8'}`}
								>
									<div
										className={`grid ${cs.highlight ? 'grid-cols-1 gap-4' : 'grid-cols-3 gap-4'}`}
									>
										{cs.metrics.map(metric => (
											<div
												key={metric.label}
												className='bg-white dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-800 rounded-2xl p-4 text-center'
											>
												<metric.icon className='w-5 h-5 text-blue-500 mx-auto mb-2' />
												<div
													className={`text-2xl font-bold bg-gradient-to-r ${cs.color} bg-clip-text text-transparent mb-1`}
												>
													{metric.value}
												</div>
												<div className='text-xs text-gray-500 dark:text-zinc-500'>
													{metric.label}
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className='mt-12 text-center'
				>
					<p className='text-gray-500 dark:text-zinc-500 mb-4'>
						{t('portfolio.nextStory')}
					</p>
					<button
						onClick={() =>
							document
								.getElementById('contact')
								?.scrollIntoView({ behavior: 'smooth' })
						}
						className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity'
					>
						{t('portfolio.cta')}
						<ArrowUpRight className='w-5 h-5' />
					</button>
				</motion.div>
			</div>
		</section>
	)
}
