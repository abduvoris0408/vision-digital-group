'use client'

import { useLanguage } from '@/contexts/language-context'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Footer() {
	const { t } = useLanguage()
	const { theme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const footerLinks = {
		[t('footer.cat.services')]: [
			{ label: t('footer.link.appDev'), href: '#services' },
			{ label: t('footer.link.webDev'), href: '#services' },
			{ label: t('footer.link.aiChatbots'), href: '#ai-automation' },
			{ label: t('footer.link.crm'), href: '#ai-automation' },
			{ label: t('footer.link.seo'), href: '#marketing' },
			{ label: t('footer.link.social'), href: '#marketing' },
			{ label: t('footer.link.email'), href: '#marketing' },
		],
		[t('footer.cat.company')]: [
			{ label: t('footer.link.about'), href: '#about' },
			{ label: t('footer.link.cases'), href: '#portfolio' },
			{ label: t('footer.link.blog'), href: '#blog' },
			{ label: t('footer.link.contact'), href: '#contact' },
		],
		[t('footer.cat.connect')]: [
			{
				label: 'visiondigitalgroup01@gmail.com',
				href: 'mailto:visiondigitalgroup01@gmail.com',
			},
			{ label: t('footer.link.instagram'), href: '#' },
			{ label: t('footer.link.linkedin'), href: '#' },
			{ label: t('footer.link.facebook'), href: '#' },
		],
		[t('footer.cat.legal')]: [
			{ label: t('footer.link.privacy'), href: '#' },
			{ label: t('footer.link.terms'), href: '#' },
		],
	}

	return (
		<footer className='border-t border-gray-200 dark:border-zinc-800 py-16 px-6 bg-gray-50 dark:bg-[#09090B] transition-colors duration-300'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 pb-12 border-b border-gray-200 dark:border-zinc-800'>
					{/* Logo + tagline */}
					<div className='col-span-2 md:col-span-1'>
						<Image
							src={
								mounted && theme === 'dark'
									? '/Logowhite.png'
									: '/Logoblack.png'
							}
							alt='Vision Digital Group'
							width={160}
							height={45}
							className='h-10 w-auto object-contain mb-4'
						/>
						<p className='text-xs text-gray-500 dark:text-zinc-500 leading-relaxed mb-4'>
							{t('footer.tagline')}
						</p>
						<p className='text-xs text-gray-400 dark:text-zinc-600'>
							{t('footer.taglineSmall')}
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
							{t('footer.link.privacy')}
						</a>
						<span className='text-gray-300 dark:text-zinc-700'>
							•
						</span>
						<a
							href='#'
							className='text-xs text-gray-400 dark:text-zinc-600 hover:text-blue-500 transition-colors'
						>
							{t('footer.link.terms')}
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
