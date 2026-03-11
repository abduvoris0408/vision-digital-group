import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/contexts/language-context'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		default:
			'Vision Digital Group | App Development, SEO & AI Solutions for Small Businesses',
		template: '%s | Vision Digital Group',
	},
	description:
		'Vision Digital Group helps small businesses grow with App Development, AI Chatbots, Web Design, SEO, Social Media Marketing, CRM systems, and smart digital strategies that drive real results.',
	metadataBase: new URL('https://www.visiondigitalgroup.uz'),
	alternates: {
		canonical: '/',
	},
	keywords: [
		'app development for small business',
		'web development agency',
		'AI chatbots',
		'SEO services',
		'CRM systems',
		'social media marketing',
		'email marketing',
		'digital marketing agency',
		'Vision Digital Group',
		'small business digital solutions',
	],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://www.visiondigitalgroup.uz',
		siteName: 'Vision Digital Group',
		title: 'Vision Digital Group | App Development, SEO & AI Solutions',
		description:
			'We help small businesses grow with App Development, AI Chatbots, SEO, Social Media & CRM. Results-driven digital agency.',
		images: [
			{
				url: '/opengraph-image.png',
				width: 1200,
				height: 630,
				alt: 'Vision Digital Group - Digital Solutions for Small Businesses',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Vision Digital Group | App Development, SEO & AI Solutions',
		description:
			'We help small businesses grow with App Development, AI Chatbots, SEO, Social Media & CRM.',
		images: ['/opengraph-image.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'pdCxeZU0s6KYP-sTMccw1ZrHB8eYAHW0y7_9ATroLmI',
	},
	icons: {
		icon: [
			{
				url: '/icon-light-32x32.png',
				media: '(prefers-color-scheme: light)',
			},
			{
				url: '/icon-dark-32x32.png',
				media: '(prefers-color-scheme: dark)',
			},
			{ url: '/icon.svg', type: 'image/svg+xml' },
		],
		apple: '/apple-icon.png',
	},
}

const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'Vision Digital Group',
	url: 'https://www.visiondigitalgroup.uz',
	logo: 'https://www.visiondigitalgroup.uz/Logowhite.png',
	description:
		'Vision Digital Group helps small businesses grow with App Development, AI Chatbots, Web Design, SEO, and Social Media Marketing.',
	email: 'visiondigitalgroup01@gmail.com',
	contactPoint: {
		'@type': 'ContactPoint',
		email: 'visiondigitalgroup01@gmail.com',
		contactType: 'customer service',
		availableLanguage: ['English', 'Uzbek'],
	},
	sameAs: [],
}

const webSiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: 'Vision Digital Group',
	url: 'https://www.visiondigitalgroup.uz',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema),
					}}
				/>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(webSiteSchema),
					}}
				/>
			</head>
			<body className='font-sans antialiased bg-white dark:bg-[#09090B] text-gray-900 dark:text-white transition-colors duration-300'>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
				>
					<LanguageProvider>
						{children}
						<Analytics />
					</LanguageProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
