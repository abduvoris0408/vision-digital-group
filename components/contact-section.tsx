'use client'

import { useLanguage } from '@/contexts/language-context'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
	const { t } = useLanguage()
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	const [submitted, setSubmitted] = useState(false)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setSubmitted(true)
		setTimeout(() => {
			setFormData({ name: '', email: '', subject: '', message: '' })
			setSubmitted(false)
		}, 3000)
	}

	return (
		<section
			id='contact'
			className='relative py-40 px-6 bg-white dark:bg-[#09090B] min-h-screen flex items-center transition-colors duration-300'
		>
			<div className='w-full max-w-6xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-20'
				>
					<h1 className='text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
						{t('contact.title')}
					</h1>
					<p className='text-xl text-gray-700 dark:text-zinc-400 max-w-2xl mx-auto'>
						{t('contact.subtitle')}
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
					{/* Contact Info Cards */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className='bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 rounded-xl p-8 hover:border-gray-300 dark:hover:border-zinc-700 transition-colors'
					>
						<Mail className='w-8 h-8 text-blue-400 mb-4' />
						<h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
							Email
						</h3>
						<p className='text-gray-700 dark:text-zinc-400'>
							visiondigitalgroup01@gmail.com
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 rounded-xl p-8 hover:border-gray-300 dark:hover:border-zinc-700 transition-colors'
					>
						<Phone className='w-8 h-8 text-blue-400 mb-4' />
						<h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
							Phone
						</h3>
						<p className='text-gray-700 dark:text-zinc-400'>
							{t('contact.phone')}
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className='bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 rounded-xl p-8 hover:border-gray-300 dark:hover:border-zinc-700 transition-colors'
					>
						<MapPin className='w-8 h-8 text-blue-400 mb-4' />
						<h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
							Location
						</h3>
						<p className='text-gray-700 dark:text-zinc-400'>
							{t('contact.location')}
						</p>
					</motion.div>
				</div>

				{/* Contact Form */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className='bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 rounded-xl p-8 md:p-12 max-w-3xl mx-auto'
				>
					<h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
						Send us a message
					</h2>
					<p className='text-gray-500 dark:text-zinc-500 text-sm mb-8'>
						We typically respond within 24 hours. Tell us about your
						business and what you need.
					</p>

					{submitted && (
						<div className='mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400'>
							Thank you for your message! We'll get back to you
							soon.
						</div>
					)}

					<form onSubmit={handleSubmit} className='space-y-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div>
								<label className='block text-sm font-medium text-gray-900 dark:text-white mb-2'>
									Name
								</label>
								<input
									type='text'
									name='name'
									value={formData.name}
									onChange={handleChange}
									required
									className='w-full px-4 py-3 bg-gray-100 dark:bg-zinc-800/50 border border-gray-300 dark:border-zinc-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors'
									placeholder='Your name'
								/>
							</div>
							<div>
								<label className='block text-sm font-medium text-gray-900 dark:text-white mb-2'>
									Email
								</label>
								<input
									type='email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									required
									className='w-full px-4 py-3 bg-gray-100 dark:bg-zinc-800/50 border border-gray-300 dark:border-zinc-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors'
									placeholder='your@email.com'
								/>
							</div>
						</div>

						<div>
							<label className='block text-sm font-medium text-gray-900 dark:text-white mb-2'>
								Subject
							</label>
							<input
								type='text'
								name='subject'
								value={formData.subject}
								onChange={handleChange}
								required
								className='w-full px-4 py-3 bg-gray-100 dark:bg-zinc-800/50 border border-gray-300 dark:border-zinc-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors'
								placeholder='Project inquiry'
							/>
						</div>

						<div>
							<label className='block text-sm font-medium text-gray-900 dark:text-white mb-2'>
								Message
							</label>
							<textarea
								name='message'
								value={formData.message}
								onChange={handleChange}
								required
								rows={6}
								className='w-full px-4 py-3 bg-gray-100 dark:bg-zinc-800/50 border border-gray-300 dark:border-zinc-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none'
								placeholder='Tell us about your project...'
							/>
						</div>

						<button
							type='submit'
							className='w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2'
						>
							<Send className='w-5 h-5' />
							Send Message
						</button>
					</form>
				</motion.div>
			</div>
		</section>
	)
}
