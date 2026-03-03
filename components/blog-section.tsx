'use client'

import { useLanguage } from '@/contexts/language-context'
import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Clock, Tag } from 'lucide-react'

export function BlogSection() {
	const { t } = useLanguage()

	const posts = [
		{
			id: 1,
			category: t('blog.p1.category'),
			categoryColor: 'text-purple-500 bg-purple-500/10',
			title: t('blog.p1.title'),
			excerpt: t('blog.p1.excerpt'),
			date: t('blog.p1.date'),
			readTime: t('blog.p1.readTime'),
			featured: true,
		},
		{
			id: 2,
			category: t('blog.p2.category'),
			categoryColor: 'text-emerald-500 bg-emerald-500/10',
			title: t('blog.p2.title'),
			excerpt: t('blog.p2.excerpt'),
			date: t('blog.p2.date'),
			readTime: t('blog.p2.readTime'),
			featured: false,
		},
		{
			id: 3,
			category: t('blog.p3.category'),
			categoryColor: 'text-pink-500 bg-pink-500/10',
			title: t('blog.p3.title'),
			excerpt: t('blog.p3.excerpt'),
			date: t('blog.p3.date'),
			readTime: t('blog.p3.readTime'),
			featured: false,
		},
		{
			id: 4,
			category: t('blog.p4.category'),
			categoryColor: 'text-blue-500 bg-blue-500/10',
			title: t('blog.p4.title'),
			excerpt: t('blog.p4.excerpt'),
			date: t('blog.p4.date'),
			readTime: t('blog.p4.readTime'),
			featured: false,
		},
		{
			id: 5,
			category: t('blog.p5.category'),
			categoryColor: 'text-orange-500 bg-orange-500/10',
			title: t('blog.p5.title'),
			excerpt: t('blog.p5.excerpt'),
			date: t('blog.p5.date'),
			readTime: t('blog.p5.readTime'),
			featured: false,
		},
		{
			id: 6,
			category: t('blog.p6.category'),
			categoryColor: 'text-cyan-500 bg-cyan-500/10',
			title: t('blog.p6.title'),
			excerpt: t('blog.p6.excerpt'),
			date: t('blog.p6.date'),
			readTime: t('blog.p6.readTime'),
			featured: false,
		},
	]

	const featured = posts.find(p => p.featured)!
	const rest = posts.filter(p => !p.featured)

	return (
		<section
			id='blog'
			className='relative py-32 px-6 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden'
		>
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/5 to-transparent rounded-full' />
			</div>

			<div className='max-w-7xl mx-auto relative z-10'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14'
				>
					<div>
						<div className='flex items-center gap-2 mb-4'>
							<Tag className='w-4 h-4 text-blue-500' />
							<span className='text-sm text-blue-500 font-medium'>
								{t('blog.label')}
							</span>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
							{t('blog.title')}
						</h2>
						<p className='text-gray-500 dark:text-zinc-400 max-w-xl'>
							{t('blog.subtitle')}
						</p>
					</div>
					<button className='inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm font-medium text-gray-700 dark:text-zinc-300 hover:border-blue-400 hover:text-blue-500 transition-colors shrink-0'>
						{t('blog.allArticles')}
						<ArrowUpRight className='w-4 h-4' />
					</button>
				</motion.div>

				{/* Featured post */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 md:p-12 mb-6 cursor-pointer group hover:shadow-2xl hover:shadow-blue-500/20 transition-all'
				>
					<div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
						<div className='flex-1'>
							<span className='inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full mb-5'>
								<span className='w-1.5 h-1.5 bg-white rounded-full' />
								{t('blog.featured')}
							</span>
							<h3 className='text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-blue-100 transition-colors'>
								{featured.title}
							</h3>
							<p className='text-blue-100 text-sm leading-relaxed mb-6 max-w-2xl'>
								{featured.excerpt}
							</p>
							<div className='flex items-center gap-4 text-blue-200 text-xs'>
								<span className='flex items-center gap-1.5'>
									<Calendar className='w-3.5 h-3.5' />
									{featured.date}
								</span>
								<span className='flex items-center gap-1.5'>
									<Clock className='w-3.5 h-3.5' />
									{featured.readTime}
								</span>
							</div>
						</div>
						<div className='shrink-0'>
							<div className='w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors'>
								<ArrowUpRight className='w-6 h-6 text-white' />
							</div>
						</div>
					</div>
				</motion.div>

				{/* Rest of posts */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
					{rest.map((post, i) => (
						<motion.div
							key={post.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.08 }}
							className='bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 cursor-pointer hover:border-blue-400/50 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all group'
						>
							<span
								className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${post.categoryColor} mb-4`}
							>
								{post.category}
							</span>
							<h3 className='font-bold text-gray-900 dark:text-white text-base mb-3 leading-snug group-hover:text-blue-500 transition-colors line-clamp-2'>
								{post.title}
							</h3>
							<p className='text-sm text-gray-500 dark:text-zinc-500 leading-relaxed mb-5 line-clamp-3'>
								{post.excerpt}
							</p>
							<div className='flex items-center justify-between text-xs text-gray-400 dark:text-zinc-600'>
								<span className='flex items-center gap-1.5'>
									<Calendar className='w-3 h-3' />
									{post.date}
								</span>
								<span className='flex items-center gap-1.5'>
									<Clock className='w-3 h-3' />
									{post.readTime}
								</span>
							</div>
						</motion.div>
					))}
				</div>

				{/* Newsletter CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='mt-12 bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 text-center'
				>
					<h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
						{t('blog.newsletterTitle')}
					</h3>
					<p className='text-gray-500 dark:text-zinc-500 text-sm mb-6 max-w-md mx-auto'>
						{t('blog.newsletterSubtitle')}
					</p>
					<div className='flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto'>
						<input
							type='email'
							placeholder={t('blog.emailPlaceholder')}
							className='flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-sm text-gray-700 dark:text-zinc-300 focus:outline-none focus:border-blue-400 transition-colors'
						/>
						<button className='px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm transition-colors shrink-0'>
							{t('blog.subscribe')}
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
