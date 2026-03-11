'use client'

import { useLanguage } from '@/contexts/language-context'
import { motion } from 'framer-motion'
import {
	BarChart2,
	Bot,
	CheckCircle,
	ChevronRight,
	Globe,
	Instagram,
	Mail,
	MessageCircle,
	Search,
	Smartphone,
	Zap,
} from 'lucide-react'
import { useState } from 'react'

export function ServicesSection() {
	const { t } = useLanguage()
	const [active, setActive] = useState('development')

	const serviceCategories = [
		{
			id: 'development',
			icon: Globe,
			color: 'from-blue-500 to-cyan-500',
			bgColor: 'bg-blue-500/10',
			iconColor: 'text-blue-500',
			label: t('services.dev.label'),
			tagline: t('services.dev.tagline'),
			description: t('services.dev.description'),
			features: [
				t('services.dev.f1'),
				t('services.dev.f2'),
				t('services.dev.f3'),
				t('services.dev.f4'),
				t('services.dev.f5'),
				t('services.dev.f6'),
			],
			highlight: t('services.dev.highlight'),
		},
		{
			id: 'ai-automation',
			icon: Bot,
			color: 'from-purple-500 to-pink-500',
			bgColor: 'bg-purple-500/10',
			iconColor: 'text-purple-500',
			label: t('services.ai.label'),
			tagline: t('services.ai.tagline'),
			description: t('services.ai.description'),
			features: [
				t('services.ai.f1'),
				t('services.ai.f2'),
				t('services.ai.f3'),
				t('services.ai.f4'),
				t('services.ai.f5'),
				t('services.ai.f6'),
			],
			highlight: t('services.ai.highlight'),
		},
		{
			id: 'marketing',
			icon: BarChart2,
			color: 'from-emerald-500 to-teal-500',
			bgColor: 'bg-emerald-500/10',
			iconColor: 'text-emerald-500',
			label: t('services.mkt.label'),
			tagline: t('services.mkt.tagline'),
			description: t('services.mkt.description'),
			features: [
				t('services.mkt.f1'),
				t('services.mkt.f2'),
				t('services.mkt.f3'),
				t('services.mkt.f4'),
				t('services.mkt.f5'),
				t('services.mkt.f6'),
			],
			highlight: t('services.mkt.highlight'),
		},
	]

	const allServices = [
		{ icon: Globe, label: t('footer.link.webDev') },
		{ icon: Smartphone, label: t('footer.link.appDev') },
		{ icon: Bot, label: t('footer.link.aiChatbots') },
		{ icon: MessageCircle, label: t('footer.link.crm') },
		{ icon: Search, label: t('footer.link.seo') },
		{ icon: BarChart2, label: t('services.mkt.f2') },
		{ icon: Instagram, label: t('footer.link.social') },
		{ icon: Mail, label: t('footer.link.email') },
		{ icon: Zap, label: t('services.ai.f5') },
	]

	const activeService = serviceCategories.find(s => s.id === active)!

	return (
		<section
			id='services'
			aria-labelledby='services-heading'
			className='relative py-32 px-6 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden'
		>
			{/* Background */}
			<div className='absolute inset-0 pointer-events-none'>
				<div
					className='absolute inset-0 opacity-30 dark:opacity-10'
					style={{
						backgroundImage:
							'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.15) 1px, transparent 0)',
						backgroundSize: '40px 40px',
					}}
				/>
			</div>

			<div className='max-w-7xl mx-auto relative z-10'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'
				>
					<div className='inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6'>
						<Zap className='w-3.5 h-3.5 text-blue-500' />
						<span className='text-sm text-blue-500 font-medium'>
							{t('services.whatWeDo')}
						</span>
					</div>
					<h2 id='services-heading' className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
						{t('services.everythingTitle')}
					</h2>
					<p className='text-gray-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg'>
						{t('services.everythingSubtitle')}
					</p>
				</motion.div>

				{/* All service pills */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className='flex flex-wrap justify-center gap-3 mb-16'
				>
					{allServices.map(s => (
						<div
							key={s.label}
							className='flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full text-sm text-gray-600 dark:text-zinc-400 hover:border-blue-400 hover:text-blue-500 transition-colors cursor-default'
						>
							<s.icon className='w-4 h-4' />
							{s.label}
						</div>
					))}
				</motion.div>

				{/* Tabs */}
				<div className='flex flex-wrap justify-center gap-3 mb-10'>
					{serviceCategories.map(cat => (
						<button
							key={cat.id}
							onClick={() => setActive(cat.id)}
							className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all ${
								active === cat.id
									? 'bg-gradient-to-r ' +
										cat.color +
										' text-white shadow-lg shadow-blue-500/20'
									: 'bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-zinc-400 hover:border-gray-300 dark:hover:border-zinc-600'
							}`}
						>
							<cat.icon className='w-4 h-4' />
							{cat.label}
						</button>
					))}
				</div>

				{/* Active service detail */}
				<motion.div
					key={active}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					className='bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12'
				>
					<div className='grid md:grid-cols-2 gap-12 items-start'>
						<div>
							<div
								className={`inline-flex items-center gap-2 px-4 py-2 ${activeService.bgColor} rounded-full mb-6`}
							>
								<activeService.icon
									className={`w-4 h-4 ${activeService.iconColor}`}
								/>
								<span
									className={`text-sm font-medium ${activeService.iconColor}`}
								>
									{activeService.tagline}
								</span>
							</div>
							<h3 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
								{activeService.label}
							</h3>
							<p className='text-gray-600 dark:text-zinc-400 leading-relaxed mb-8'>
								{activeService.description}
							</p>
							{/* Highlight */}
							<div
								className={`bg-gradient-to-r ${activeService.color} p-px rounded-2xl`}
							>
								<div className='bg-white dark:bg-zinc-900 rounded-2xl px-5 py-4'>
									<p className='text-sm font-medium text-gray-700 dark:text-zinc-300'>
										💡 {activeService.highlight}
									</p>
								</div>
							</div>
							<button
								onClick={() =>
									document
										.getElementById('contact')
										?.scrollIntoView({ behavior: 'smooth' })
								}
								className={`mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${activeService.color} text-white font-medium rounded-xl hover:opacity-90 transition-opacity text-sm`}
							>
								{t('services.getStarted')}
								<ChevronRight className='w-4 h-4' />
							</button>
						</div>

						{/* Feature list */}
						<div className='space-y-4'>
							<h4 className='text-sm font-semibold text-gray-500 dark:text-zinc-500 uppercase tracking-wider mb-6'>
								{t('services.whatsIncluded')}
							</h4>
							{activeService.features.map((feature, i) => (
								<motion.div
									key={feature}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.3,
										delay: i * 0.06,
									}}
									className='flex items-start gap-3'
								>
									<CheckCircle
										className={`w-5 h-5 ${activeService.iconColor} shrink-0 mt-0.5`}
									/>
									<span className='text-gray-700 dark:text-zinc-300 text-sm'>
										{feature}
									</span>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
