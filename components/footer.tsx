'use client'

import { useLanguage } from '@/contexts/language-context'
import Image from 'next/image'

export function Footer() {
	const { t } = useLanguage()

	const footerLinks = {
		Services: [
			{ label: 'App Development', href: '#services' },
			{ label: 'Web Development', href: '#services' },
			{ label: 'AI Chatbots', href: '#ai-automation' },
			{ label: 'CRM Systems', href: '#ai-automation' },
			{ label: 'SEO & E-commerce', href: '#marketing' },
			{ label: 'Social Media', href: '#marketing' },
			{ label: 'Email Marketing', href: '#marketing' },
		],
		Company: [
			{ label: 'About Us', href: '#about' },
			{ label: 'Case Studies', href: '#portfolio' },
			{ label: 'Blog & Insights', href: '#blog' },
			{ label: 'Contact Us', href: '#contact' },
		],
		Connect: [
			{
				label: 'contact@visiondigitalgroup.com',
				href: 'mailto:contact@visiondigitalgroup.com',
			},
			{ label: 'Instagram', href: '#' },
			{ label: 'LinkedIn', href: '#' },
			{ label: 'Facebook', href: '#' },
		],
		Legal: [
			{ label: 'Privacy Policy', href: '#' },
			{ label: 'Terms of Service', href: '#' },
		],
	}

	return (
		<footer className='border-t border-gray-200 dark:border-zinc-800 py-16 px-6 bg-gray-50 dark:bg-[#09090B] transition-colors duration-300'>
			<div className='max-w-6xl mx-auto'>
				<div className='grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 pb-12 border-b border-gray-200 dark:border-zinc-800'>
					{/* Logo + tagline */}
					<div className='col-span-2 md:col-span-1'>
						<Image
							src='/vision_digital_group_logo_adaptive.svg'
							alt='Vision Digital Group'
							width={160}
							height={45}
							className='h-10 w-auto object-contain mb-4 '
						/>
						<p className='text-xs text-gray-500 dark:text-zinc-500 leading-relaxed mb-4'>
							{t('footer.tagline')}
						</p>
						<p className='text-xs text-gray-400 dark:text-zinc-600'>
							Innovative Solutions for Small Businesses
						</p>
					</div>

					{/* Links */}
					{Object.entries(footerLinks).map(([category, links]) => (
						<div key={category}>
							<h3 className='text-gray-900 dark:text-white font-semibold text-sm mb-4'>
								{category}
							</h3>
							<ul className='space-y-3'>
								{links.map(link => (
									<li key={link.label}>
										<a
											href={link.href}
											className='text-gray-500 dark:text-zinc-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm'
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Bottom */}
				<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
					<p className='text-xs text-gray-400 dark:text-zinc-600'>
						{t('footer.rights')}
					</p>
					<div className='flex items-center gap-4'>
						<a
							href='#'
							className='text-xs text-gray-400 dark:text-zinc-600 hover:text-blue-500 transition-colors'
						>
							Privacy Policy
						</a>
						<span className='text-gray-300 dark:text-zinc-700'>
							•
						</span>
						<a
							href='#'
							className='text-xs text-gray-400 dark:text-zinc-600 hover:text-blue-500 transition-colors'
						>
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
