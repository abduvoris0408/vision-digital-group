export type Language = 'en' | 'uz'

export const translations: Record<Language, Record<string, string>> = {
	en: {
		// Navigation
		'nav.services': 'Services',
		'nav.solutions': 'Solutions',
		'nav.technologies': 'Technologies',
		'nav.portfolio': 'Portfolio',
		'nav.getInTouch': 'Get in touch',
		'nav.selectLanguage': 'Select Language',
		'nav.home': 'Home',
		'nav.about': 'About Us',
		'nav.caseStudies': 'Case Studies',
		'nav.blog': 'Blog',
		'nav.contactUs': 'Contact Us',

		// Hero Section
		'hero.title': 'Innovative Solutions for Your Business',
		'hero.subtitle':
			'Vision Digital Group helps small businesses grow with App Development, AI Chatbots, Web Design, SEO, Social Media, CRM, and smart digital marketing that drives real results.',
		'hero.cta': 'Get Started Today',
		'hero.secondary': 'View Our Work',
		'hero.pill1': 'App Development',
		'hero.pill2': 'AI Chatbots',
		'hero.pill3': 'Web Design',
		'hero.pill4': 'SEO',
		'hero.pill5': 'Social Media',
		'hero.pill6': 'Email Marketing',
		'hero.pill7': 'CRM',
		'hero.pill8': 'Ad Campaigns',
		// Services Section
		'services.title': 'Our Services',
		'services.subtitle':
			'Everything your small business needs to grow, automate, and compete in the digital world',
		'services.webDev': 'App & Web Development',
		'services.webDevDesc':
			'Beautiful, high-converting websites and mobile apps built for your brand and your customers',
		'services.backend': 'AI Chatbots & CRMs',
		'services.backendDesc':
			'Personalized AI assistants and CRM systems that automate tasks and delight customers 24/7',
		'services.cloud': 'SEO & E-commerce',
		'services.cloudDesc':
			'Rank higher on Google and sell more with powerful SEO strategies for brands and online stores',
		'services.mobile': 'Social Media & Ads',
		'services.mobileDesc':
			'Content creation, audience targeting, campaign optimization, and performance tracking',
		'services.consulting': 'Email Marketing',
		'services.consultingDesc':
			'Strategic email campaigns that convert — from automation to audience segmentation',

		// Services Section (Full)
		'services.whatWeDo': 'What We Do',
		'services.everythingTitle': 'Everything Your Business Needs',
		'services.everythingSubtitle':
			'One agency, one team, one goal — to grow your business online with the right tools, strategy, and execution.',
		'services.whatsIncluded': "What's Included",
		'services.getStarted': 'Get Started',
		// Development category
		'services.dev.label': 'App & Web Development',
		'services.dev.tagline': 'Build your digital foundation',
		'services.dev.description':
			'We design and develop professional websites and mobile apps that are fast, beautiful, and built to convert visitors into customers.',
		'services.dev.f1': 'Custom website design & development',
		'services.dev.f2': 'Mobile app development (iOS & Android)',
		'services.dev.f3': 'E-commerce store setup & optimization',
		'services.dev.f4': 'Landing pages that convert',
		'services.dev.f5': 'Website speed & performance tuning',
		'services.dev.f6': 'Hosting, maintenance & updates',
		'services.dev.highlight': 'Websites from $999 — delivered in 2 weeks',
		// AI category
		'services.ai.label': 'AI & Automation',
		'services.ai.tagline': 'Work smarter, not harder',
		'services.ai.description':
			'Deploy AI chatbots, personalized automation, and smart CRM systems that handle customer interactions, follow-ups, and internal tasks — 24/7.',
		'services.ai.f1': 'AI Chatbot for your website or app',
		'services.ai.f2': 'Personalized AI assistant for internal tasks',
		'services.ai.f3': 'CRM setup, automation & management',
		'services.ai.f4': 'AI-powered lead capture & follow-up',
		'services.ai.f5': 'Email automation workflows',
		'services.ai.f6': 'Smart scheduling & appointment bots',
		'services.ai.highlight':
			'AI chatbots that respond in seconds, close leads while you sleep',
		// Marketing category
		'services.mkt.label': 'Marketing & Growth',
		'services.mkt.tagline': 'Get found. Get leads. Get sales.',
		'services.mkt.description':
			'From SEO and Google Ads to social media management and email campaigns — we handle your entire marketing engine so you can focus on running your business.',
		'services.mkt.f1': 'SEO for local & national brands',
		'services.mkt.f2': 'Google & Meta ad campaign management',
		'services.mkt.f3': 'Social media content & scheduling',
		'services.mkt.f4': 'Email marketing & newsletter setup',
		'services.mkt.f5': 'Audience targeting & retargeting',
		'services.mkt.f6': 'Monthly performance reports & insights',
		'services.mkt.highlight': 'Average 3x ROI on ad spend within 90 days',

		// About Section
		'about.whoWeAre': 'Who We Are',
		'about.title': 'We Grow Small Businesses with Smart Digital Tools',
		'about.p1':
			'Vision Digital Group was built with one mission: give small businesses access to the same powerful digital tools that big corporations use — without the big price tag or complexity.',
		'about.p2':
			"We're a full-service digital agency that handles your entire online presence — from building your website and mobile app to managing your social media, running AI chatbots, optimizing your SEO, and running targeted ad campaigns that convert.",
		'about.workWithUs': 'Work With Us',
		'about.seeOurWork': 'See Our Work',
		'about.stat1.value': '150+',
		'about.stat1.label': 'Small Businesses Helped',
		'about.stat2.value': '98%',
		'about.stat2.label': 'Client Satisfaction Rate',
		'about.stat3.value': '3x',
		'about.stat3.label': 'Average Revenue Growth',
		'about.stat4.value': '24/7',
		'about.stat4.label': 'AI & Support Coverage',
		'about.whyTitle': 'Why Clients Choose Us',
		'about.whySubtitle':
			'What makes Vision Digital Group different from every other agency',
		'about.val1.title': 'Results-Driven',
		'about.val1.desc':
			"We don't just build — we track performance, optimize campaigns, and make sure every dollar you invest works harder for your business.",
		'about.val2.title': 'Small Business First',
		'about.val2.desc':
			'We specialize in small businesses. Our solutions are built to scale with you — affordable today, powerful as you grow.',
		'about.val3.title': 'AI-Powered Efficiency',
		'about.val3.desc':
			'From AI chatbots to personalized automation, we bring enterprise-level intelligence to businesses of any size.',
		'about.val4.title': 'Full-Service Partner',
		'about.val4.desc':
			'One team handles everything — your website, apps, ads, SEO, CRM, and content. No juggling multiple agencies.',

		// Case Studies Section
		'portfolio.realResults': 'Real Results',
		'portfolio.title': 'Client Success Stories',
		'portfolio.subtitle':
			"Real businesses, real results. Here's how Vision Digital Group helped small businesses grow with the right digital strategy.",
		'portfolio.startStory': 'Start Your Story',
		'portfolio.nextStory': 'Ready to be our next success story?',
		'portfolio.cta': "Let's Talk About Your Business",
		// Case study 1
		'portfolio.cs1.category': 'Web Development + SEO',
		'portfolio.cs1.client': 'Local Restaurant Chain',
		'portfolio.cs1.title':
			'From Zero Online Presence to $40K/Month in Online Orders',
		'portfolio.cs1.story':
			'A 3-location restaurant had no website and zero online ordering. We built a fast, mobile-first site with online ordering integrated, ran local SEO, and set up Google Ads. Within 4 months, they were getting 800+ online orders per month.',
		'portfolio.cs1.m1.value': '800+',
		'portfolio.cs1.m1.label': 'Orders/month',
		'portfolio.cs1.m2.value': '340%',
		'portfolio.cs1.m2.label': 'Revenue growth',
		'portfolio.cs1.m3.value': '4.9',
		'portfolio.cs1.m3.label': 'Google rating',
		// Case study 2
		'portfolio.cs2.category': 'AI Chatbot + CRM',
		'portfolio.cs2.client': 'Real Estate Agency',
		'portfolio.cs2.title':
			'AI Chatbot Tripled Lead Conversion Without Extra Staff',
		'portfolio.cs2.story':
			'A real estate agency was losing leads after hours. We deployed an AI chatbot that answers property questions, qualifies leads, and books showings 24/7. Combined with CRM automation, their conversion rate went from 8% to 27%.',
		'portfolio.cs2.m1.value': '27%',
		'portfolio.cs2.m1.label': 'Conversion rate (was 8%)',
		'portfolio.cs2.m2.value': '500+',
		'portfolio.cs2.m2.label': 'Leads captured/month',
		'portfolio.cs2.m3.value': '3x',
		'portfolio.cs2.m3.label': 'More showings booked',
		// Case study 3
		'portfolio.cs3.category': 'Social Media + Email Marketing',
		'portfolio.cs3.client': 'Fashion Boutique',
		'portfolio.cs3.title':
			'0 to 25K Instagram Followers & 5x Email Revenue in 6 Months',
		'portfolio.cs3.story':
			'A small clothing boutique had 400 Instagram followers and barely used email. We took over their social media, created weekly content, built a segmented email list, and ran targeted Meta ads. Six months later, they had 25K followers and email was their #1 revenue channel.',
		'portfolio.cs3.m1.value': '25K',
		'portfolio.cs3.m1.label': 'Instagram followers',
		'portfolio.cs3.m2.value': '5x',
		'portfolio.cs3.m2.label': 'Email revenue',
		'portfolio.cs3.m3.value': '12K',
		'portfolio.cs3.m3.label': 'Email subscribers',
		// Case study 4
		'portfolio.cs4.category': 'App Development',
		'portfolio.cs4.client': 'Fitness Studio',
		'portfolio.cs4.title':
			'Custom App Replaced 4 Tools & Saved $3K/Month in Software Costs',
		'portfolio.cs4.story':
			'A gym was paying for separate booking, payments, loyalty, and communication tools. We built a single custom mobile app that handles everything — membership, class booking, trainer chat, and push notifications — cutting their costs and improving the member experience dramatically.',
		'portfolio.cs4.m1.value': '$3K',
		'portfolio.cs4.m1.label': 'Saved monthly on software',
		'portfolio.cs4.m2.value': '95%',
		'portfolio.cs4.m2.label': 'App adoption rate',
		'portfolio.cs4.m3.value': '4.8',
		'portfolio.cs4.m3.label': 'App Store rating',

		// Blog Section
		'blog.label': 'Blog & Insights',
		'blog.title': 'Tips, Strategies & Digital Insights',
		'blog.subtitle':
			'Practical advice to help small businesses grow online — from SEO and AI tools to social media and ad campaigns.',
		'blog.allArticles': 'All Articles',
		'blog.featured': 'Featured Article',
		'blog.newsletterTitle': 'Get Weekly Digital Growth Tips',
		'blog.newsletterSubtitle':
			'Join 3,000+ small business owners who get our best strategies every Tuesday. No spam, unsubscribe anytime.',
		'blog.subscribe': 'Subscribe',
		'blog.emailPlaceholder': 'your@email.com',
		// Posts
		'blog.p1.category': 'AI & Automation',
		'blog.p1.title':
			'5 Ways AI Chatbots Are Changing How Small Businesses Handle Customer Service',
		'blog.p1.excerpt':
			'AI chatbots are no longer just for enterprise companies. Learn how a $99/month chatbot can respond to 80% of customer questions instantly — even at 3am.',
		'blog.p1.date': 'Feb 20, 2026',
		'blog.p1.readTime': '5 min read',
		'blog.p2.category': 'SEO',
		'blog.p2.title':
			"Why Your Local Business Isn't Showing Up on Google (And How to Fix It)",
		'blog.p2.excerpt':
			"Most small businesses miss 3 key SEO fundamentals that keep them invisible on Google. Here's a practical checklist to fix your local search rankings fast.",
		'blog.p2.date': 'Feb 14, 2026',
		'blog.p2.readTime': '7 min read',
		'blog.p3.category': 'Social Media',
		'blog.p3.title':
			'The 2026 Content Calendar Template for Small Business Social Media',
		'blog.p3.excerpt':
			'Stop guessing what to post. Download our free content calendar template and learn the 3-2-1 posting formula that gets consistent engagement without burning out.',
		'blog.p3.date': 'Feb 7, 2026',
		'blog.p3.readTime': '4 min read',
		'blog.p4.category': 'Web Development',
		'blog.p4.title':
			'Mobile-First vs Responsive Design: What Actually Matters for Your Business',
		'blog.p4.excerpt':
			"65% of your customers are browsing on mobile. Here's what you need to know about building a website that looks and performs perfectly on every device.",
		'blog.p4.date': 'Jan 28, 2026',
		'blog.p4.readTime': '6 min read',
		'blog.p5.category': 'Email Marketing',
		'blog.p5.title':
			'How We Generated $22K in Revenue from One Email Sequence (Step-by-Step)',
		'blog.p5.excerpt':
			'Email marketing has a 4200% ROI — but only if you send the right emails at the right time. We break down the exact 7-email welcome sequence we use for our clients.',
		'blog.p5.date': 'Jan 20, 2026',
		'blog.p5.readTime': '8 min read',
		'blog.p6.category': 'Marketing',
		'blog.p6.title':
			'Google Ads vs Meta Ads: Which Is Better for Your Small Business in 2026?',
		'blog.p6.excerpt':
			"Both platforms work — but for different goals and industries. Here's a no-fluff breakdown to help you decide where to put your ad budget first.",
		'blog.p6.date': 'Jan 12, 2026',
		'blog.p6.readTime': '6 min read',

		// CTA Section
		'cta.badge': 'Limited spots available this month',
		'cta.title': 'Ready to Grow Your Business with Digital?',
		'cta.subtitle':
			"Book a free 30-minute strategy call. We'll analyze your current digital presence and show you exactly how to grow — no commitments, no fluff.",
		'cta.primary': 'Book Free Strategy Call',
		'cta.secondary': 'Explore Services',
		'cta.disclaimer': 'No contracts required. Cancel anytime.',

		// Logo Cloud
		'logoCloud.title': 'Trusted by Leading Companies',
		'logoCloud.subtitle':
			'Empowering businesses from startups to Fortune 500 companies',
		'logoCloud.button': 'Meet our customers',

		// Footer
		'footer.tagline': 'Innovative Solutions for Your Business',
		'footer.services': 'Services',
		'footer.products': 'Products',
		'footer.company': 'Company',
		'footer.resources': 'Resources',
		'footer.follow': 'Follow',
		'footer.webDev': 'App & Web Development',
		'footer.backendEng': 'AI Chatbots & Automation',
		'footer.cloudSol': 'SEO & E-commerce',
		'footer.apiDev': 'Social Media Management',
		'footer.consulting': 'Email Marketing',
		'footer.support': 'Support',
		'footer.training': 'Training',
		'footer.webApps': 'Web Applications',
		'footer.mobileSol': 'Mobile Solutions',
		'footer.enterpriseSys': 'Enterprise Systems',
		'footer.devopsTools': 'DevOps Tools',
		'footer.documentation': 'Documentation',
		'footer.caseStudies': 'Case Studies',
		'footer.resources2': 'Resources',
		'footer.aboutUs': 'About Us',
		'footer.ourTeam': 'Our Team',
		'footer.careers': 'Careers',
		'footer.blog': 'Blog',
		'footer.news': 'News',
		'footer.achievements': 'Achievements',
		'footer.brand': 'Brand',
		'footer.developers': 'Developers',
		'footer.github': 'GitHub',
		'footer.reportIssue': 'Report Issue',
		'footer.privacyPolicy': 'Privacy Policy',
		'footer.termsOfService': 'Terms of Service',
		'footer.contact': 'Contact',
		'footer.contactUs': 'Contact us',
		'footer.email': 'Email',
		'footer.linkedIn': 'LinkedIn',
		'footer.website': 'Website',
		'footer.rights': '© 2026 Vision Digital Group. All rights reserved.',
		'footer.sitemap': 'Sitemap',
		'footer.cat.services': 'Services',
		'footer.cat.company': 'Company',
		'footer.cat.connect': 'Connect',
		'footer.cat.legal': 'Legal',
		'footer.link.appDev': 'App Development',
		'footer.link.webDev': 'Web Development',
		'footer.link.aiChatbots': 'AI Chatbots',
		'footer.link.crm': 'CRM Systems',
		'footer.link.seo': 'SEO & E-commerce',
		'footer.link.social': 'Social Media',
		'footer.link.email': 'Email Marketing',
		'footer.link.about': 'About Us',
		'footer.link.cases': 'Case Studies',
		'footer.link.blog': 'Blog & Insights',
		'footer.link.contact': 'Contact Us',
		'footer.link.instagram': 'Instagram',
		'footer.link.linkedin': 'LinkedIn',
		'footer.link.facebook': 'Facebook',
		'footer.link.privacy': 'Privacy Policy',
		'footer.link.terms': 'Terms of Service',
		'footer.taglineSmall': 'Innovative Solutions for Small Businesses',

		// Contact Section
		'contact.title': 'Ready to Grow Your Business?',
		'contact.subtitle':
			"Let's build something great together — from your first idea to a fully running digital system",
		'contact.email': 'visiondigitalgroup01@gmail.com',
		'contact.phone': '+998 88 161 18 08',
		'contact.location': 'Tashkent',
		'contact.sendTitle': 'Send us a message',
		'contact.sendSubtitle':
			'We typically respond within 24 hours. Tell us about your business and what you need.',
		'contact.name': 'Name',
		'contact.namePlaceholder': 'Your name',
		'contact.emailLabel': 'Email',
		'contact.subject': 'Subject',
		'contact.subjectPlaceholder': 'Project inquiry',
		'contact.message': 'Message',
		'contact.messagePlaceholder': 'Tell us about your project...',
		'contact.send': 'Send Message',
		'contact.successMsg':
			"Thank you for your message! We'll get back to you soon.",

		// Theme
		'theme.light': 'Light',
		'theme.dark': 'Dark',
	},
	uz: {
		// Navigation
		'nav.services': 'Xizmatlar',
		'nav.solutions': 'Yechimlar',
		'nav.technologies': 'Texnologiyalar',
		'nav.portfolio': 'Portfolio',
		'nav.getInTouch': "Bog'lanish",
		'nav.selectLanguage': 'Tilni Tanlang',
		'nav.home': 'Bosh sahifa',
		'nav.about': 'Biz Haqimizda',
		'nav.caseStudies': 'Muvaffaqiyat Tarixlari',
		'nav.blog': 'Blog',
		'nav.contactUs': "Biz bilan bog'laning",

		// Hero Section
		'hero.title': 'Biznesingiz uchun Innovatsion Yechimlar',
		'hero.subtitle':
			"Vision Digital Group kichik bizneslarni App ishlab chiqarish, AI Chatbotlar, Veb Dizayn, SEO, Ijtimoiy Tarmoqlar, CRM va aqlli raqamli marketing orqali o'stirishga yordam beradi.",
		'hero.cta': 'Bugun Boshlang',
		'hero.secondary': "Ishlarimizni Ko'ring",
		'hero.pill1': 'Ilova Ishlab Chiqish',
		'hero.pill2': 'AI Chatbotlar',
		'hero.pill3': 'Veb Dizayn',
		'hero.pill4': 'SEO',
		'hero.pill5': 'Ijtimoiy Tarmoq',
		'hero.pill6': 'Email Marketing',
		'hero.pill7': 'CRM',
		'hero.pill8': 'Reklama Kampaniyalari',
		// Services Section
		'services.title': 'Bizning Xizmatlar',
		'services.subtitle':
			"Kichik biznesingizni raqamli dunyoda o'stirish, avtomatlashtirish va raqobat qilish uchun kerak bo'lgan hamma narsa",
		'services.webDev': 'App va Veb Ishlab Chiqarish',
		'services.webDevDesc':
			'Brendingiz va mijozlaringiz uchun yaratilgan chiroyli, yuqori konversiyali saytlar va mobil ilovalar',
		'services.backend': 'AI Chatbotlar va CRM',
		'services.backendDesc':
			'Vazifalarni avtomatlashtiradigan va mijozlarni 24/7 mamnun qiladigan shaxsiylashtirilgan AI yordamchilar va CRM tizimlari',
		'services.cloud': 'SEO va E-tijorat',
		'services.cloudDesc':
			"Google'da yuqoriroq pog'onaga chiqing va brendlar va onlayn do'konlar uchun kuchli SEO strategiyalari bilan ko'proq soting",
		'services.mobile': 'Ijtimoiy Tarmoq va Reklamalar',
		'services.mobileDesc':
			'Kontent yaratish, auditoriyani nishonga olish, kampaniyani optimallash va ishlashni kuzatish',
		'services.consulting': 'Email Marketing',
		'services.consultingDesc':
			'Konversiya qiladigan strategik email kampaniyalari — avtomatizatsiyadan auditoriya segmentatsiyasigacha',

		// Services Section (Full)
		'services.whatWeDo': 'Nima Qilamiz',
		'services.everythingTitle': "Biznesingizga Kerak Bo'lgan Hamma Narsa",
		'services.everythingSubtitle':
			"Bitta agentlik, bitta jamoa, bitta maqsad — to'g'ri vositalar, strategiya va ijro bilan biznesingizni onlayn o'stirish.",
		'services.whatsIncluded': 'Nima Kiritilgan',
		'services.getStarted': 'Boshlash',
		// Development category
		'services.dev.label': 'App va Veb Ishlab Chiqarish',
		'services.dev.tagline': 'Raqamli poydevoringizni quring',
		'services.dev.description':
			'Tez, chiroyli va tashrif buyuruvchilarni mijozlarga aylantirish uchun yaratilgan professional saytlar va mobil ilovalar loyihalashtiramiz va ishlab chiqamiz.',
		'services.dev.f1': 'Maxsus sayt dizayni va ishlab chiqish',
		'services.dev.f2': 'Mobil ilova ishlab chiqish (iOS va Android)',
		'services.dev.f3': "E-tijorat do'konini sozlash va optimallashtirish",
		'services.dev.f4': 'Konversiya qiladigan landing sahifalar',
		'services.dev.f5': 'Sayt tezligi va ishlashini sozlash',
		'services.dev.f6':
			"Hosting, texnik xizmat ko'rsatish va yangilanishlar",
		'services.dev.highlight':
			'Saytlar $999 dan — 2 hafta ichida yetkazib beriladi',
		// AI category
		'services.ai.label': 'AI va Avtomatlashtirish',
		'services.ai.tagline': "Aqlli ishlang, ko'proq emas",
		'services.ai.description':
			'Mijozlar bilan muloqotni, kuzatuvlarni va ichki vazifalarni 24/7 boshqaradigan AI chatbotlar, shaxsiylashtirilgan avtomatlashtirish va aqlli CRM tizimlarini joriy eting.',
		'services.ai.f1': 'Sayt yoki ilovangiz uchun AI Chatbot',
		'services.ai.f2':
			'Ichki vazifalar uchun shaxsiylashtirilgan AI yordamchi',
		'services.ai.f3': 'CRM sozlash, avtomatlashtirish va boshqarish',
		'services.ai.f4': "AI yordamida lead qo'lga olish va kuzatib borish",
		'services.ai.f5': 'Email avtomatlashtirish ishchi oqimlari',
		'services.ai.f6': 'Aqlli rejalashtirish va uchrashuv botlari',
		'services.ai.highlight':
			"Soniyalar ichida javob beradigan AI chatbotlar — siz uxlayotganingizda lead'larni yopadi",
		// Marketing category
		'services.mkt.label': "Marketing va O'sish",
		'services.mkt.tagline': 'Topiling. Lead oling. Soting.',
		'services.mkt.description':
			"SEO va Google Reklamalardan ijtimoiy tarmoqlarni boshqarish va email kampaniyalarigacha — biz butun marketing mexanizmingizni boshqaramiz, siz esa biznesingizga e'tibor qarating.",
		'services.mkt.f1': 'Mahalliy va milliy brendlar uchun SEO',
		'services.mkt.f2': 'Google va Meta reklama kampaniyalarini boshqarish',
		'services.mkt.f3': 'Ijtimoiy tarmoq kontenti va rejalashtirish',
		'services.mkt.f4': 'Email marketing va yangiliklar xabarnomasi sozlash',
		'services.mkt.f5':
			'Auditoriyani nishonga olish va qayta nishonga olish',
		'services.mkt.f6': 'Oylik ishlash hisobotlari va tahlillar',
		'services.mkt.highlight':
			"90 kun ichida reklama xarajatlaridan o'rtacha 3x ROI",

		// About Section
		'about.whoWeAre': 'Biz Kimmiz',
		'about.title':
			"Kichik Bizneslarni Aqlli Raqamli Vositalar Bilan O'stiramiz",
		'about.p1':
			"Vision Digital Group bitta missiya bilan qurilgan: kichik bizneslarni yirik korporatsiyalar foydalanadigan kuchli raqamli vositalar bilan ta'minlash — katta narx etiketi va murakkabliksiz.",
		'about.p2':
			"Biz to'liq xizmat ko'rsatuvchi raqamli agentlikmiz — sayt va mobil ilovangizni qurishdan tortib, ijtimoiy tarmoqlaringizni boshqarish, AI chatbotlarini ishlatish, SEO ni optimallashtirish va konversiya qiladigan maqsadli reklama kampaniyalarini o'tkazishgacha.",
		'about.workWithUs': 'Biz Bilan Ishlang',
		'about.seeOurWork': "Ishlarimizni Ko'ring",
		'about.stat1.value': '150+',
		'about.stat1.label': 'Yordam Berilgan Kichik Bizneslar',
		'about.stat2.value': '98%',
		'about.stat2.label': 'Mijozlar Mamnuniyati',
		'about.stat3.value': '3x',
		'about.stat3.label': "O'rtacha Daromad O'sishi",
		'about.stat4.value': '24/7',
		'about.stat4.label': "AI va Qo'llab-Quvvatlash",
		'about.whyTitle': 'Mijozlar Nima Uchun Bizni Tanlaydi',
		'about.whySubtitle':
			'Vision Digital Group boshqa agentliklardan nimasi bilan farq qiladi',
		'about.val1.title': "Natijalarga Yo'naltirilgan",
		'about.val1.desc':
			"Biz faqat qurmaymiz — ishlashni kuzatamiz, kampaniyalarni optimallashtiramiz va investitsiya qilgan har bir so'mingiz biznesingiz uchun ko'proq ishlashiga ishonch hosil qilamiz.",
		'about.val2.title': 'Kichik Biznes Birinchi',
		'about.val2.desc':
			"Biz kichik biznesga ixtisoslashamiz. Yechimlarimiz siz bilan o'sish uchun qurilgan — bugun arzon, o'sganingizda kuchli.",
		'about.val3.title': 'AI Kuchlantirgan Samaradorlik',
		'about.val3.desc':
			"AI chatbotlardan shaxsiylashtirilgan avtomatlashtirishgacha, har qanday o'lchamdagi bizneslarga korporativ darajadagi intellekt olib kelamiz.",
		'about.val4.title': "To'liq Xizmat Hamkori",
		'about.val4.desc':
			"Bir jamoa hamma narsani boshqaradi — saytingiz, ilovalar, reklamalar, SEO, CRM va kontent. Bir nechta agentlik bilan muomala yo'q.",

		// Case Studies Section
		'portfolio.realResults': 'Haqiqiy Natijalar',
		'portfolio.title': 'Mijozlar Muvaffaqiyat Tarixi',
		'portfolio.subtitle':
			"Haqiqiy bizneslar, haqiqiy natijalar. Vision Digital Group kichik bizneslarni to'g'ri raqamli strategiya bilan qanday o'stirgani.",
		'portfolio.startStory': "O'z Tariхingizni Boshlang",
		'portfolio.nextStory':
			'Keyingi muvaffaqiyat tariximizga aylanishga tayyormisiz?',
		'portfolio.cta': 'Biznesingiz Haqida Gaplashaylik',
		// Case study 1
		'portfolio.cs1.category': 'Veb Ishlab Chiqish + SEO',
		'portfolio.cs1.client': "Mahalliy Restoran Tarmog'i",
		'portfolio.cs1.title':
			'Nol Onlayn Mavjudlikdan Oyiga $40K Onlayn Buyurtmaga',
		'portfolio.cs1.story':
			"3 filiali bor restoranning saiti va onlayn buyurtma tizimi yo'q edi. Biz onlayn buyurtma integratsiyalangan tez, mobil-birinchi sayt yaratdik, mahalliy SEO o'tkardik va Google Ads sozladik. 4 oy ichida oyiga 800+ onlayn buyurtma olishdi.",
		'portfolio.cs1.m1.value': '800+',
		'portfolio.cs1.m1.label': 'Oylik buyurtmalar',
		'portfolio.cs1.m2.value': '340%',
		'portfolio.cs1.m2.label': "Daromad o'sishi",
		'portfolio.cs1.m3.value': '4.9',
		'portfolio.cs1.m3.label': 'Google reytingi',
		// Case study 2
		'portfolio.cs2.category': 'AI Chatbot + CRM',
		'portfolio.cs2.client': "Ko'chmas Mulk Agentligi",
		'portfolio.cs2.title':
			"AI Chatbot Qo'shimcha Xodimsiз Lead Konversiyasini Uch Barobarga Oshirdi",
		'portfolio.cs2.story':
			"Ko'chmas mulk agentligi ish soatidan keyin leadlarni yo'qotardi. Biz mulk savollariga javob beradigan, leadlarni baholaydigan va ko'rishlarni 24/7 bronlaydigan AI chatbot joylashtirdik. CRM avtomatlashtiruvi bilan konversiya darajasi 8% dan 27% ga o'sdi.",
		'portfolio.cs2.m1.value': '27%',
		'portfolio.cs2.m1.label': 'Konversiya darajasi (ilgari 8% edi)',
		'portfolio.cs2.m2.value': '500+',
		'portfolio.cs2.m2.label': "Oylik qo'lga olingan leadlar",
		'portfolio.cs2.m3.value': '3x',
		'portfolio.cs2.m3.label': "Ko'proq ko'rishlar bronlandi",
		// Case study 3
		'portfolio.cs3.category': 'Ijtimoiy Tarmoq + Email Marketing',
		'portfolio.cs3.client': 'Moda Butiqi',
		'portfolio.cs3.title':
			'6 Oyda 0 dan 25K Instagram Obunachilariga va 5x Email Daromadiga',
		'portfolio.cs3.story':
			"Kichik kiyim butigining 400 Instagram obunachisi bor edi va emaildan deyarli foydalanmasdi. Biz ijtimoiy tarmoqlarini o'z zimmasiga oldik, haftalik kontent yaratdik, segmentlangan email ro'yхati tuzib, maqsadli Meta reklamalari o'tkazdik. Olti oy o'tib, 25K obunachilariga ega bo'ldi va email #1 daromad kanaliga aylandi.",
		'portfolio.cs3.m1.value': '25K',
		'portfolio.cs3.m1.label': 'Instagram obunachilar',
		'portfolio.cs3.m2.value': '5x',
		'portfolio.cs3.m2.label': 'Email daromadi',
		'portfolio.cs3.m3.value': '12K',
		'portfolio.cs3.m3.label': 'Email obunachilari',
		// Case study 4
		'portfolio.cs4.category': 'Ilova Ishlab Chiqish',
		'portfolio.cs4.client': 'Fitnes Studiya',
		'portfolio.cs4.title':
			"Maxsus Ilova 4 Vositaning O'rnini Bosdi va Oyiga $3K Dasturiy Ta'minot Xarajatlarini Tejadi",
		'portfolio.cs4.story':
			"Sporzal alohida bron, to'lov, sodiqlik va muloqot vositalariga pul to'lardi. Biz hamma narsani boshqaradigan — a'zolik, dars bronlash, murabbiy chati va push bildirishnomalar — yagona maxsus mobil ilova yaratdik, xarajatlarni kamaytirdi va a'zolar tajribasini sezilarli yaxshiladi.",
		'portfolio.cs4.m1.value': '$3K',
		'portfolio.cs4.m1.label': "Dasturiy ta'minotda oylik tejash",
		'portfolio.cs4.m2.value': '95%',
		'portfolio.cs4.m2.label': 'Ilovadan foydalanish darajasi',
		'portfolio.cs4.m3.value': '4.8',
		'portfolio.cs4.m3.label': 'App Store reytingi',

		// Blog Section
		'blog.label': 'Blog va Tahlillar',
		'blog.title': 'Maslahatlar, Strategiyalar va Raqamli Tahlillar',
		'blog.subtitle':
			"Kichik bizneslarning onlayn o'sishiga yordam beradigan amaliy maslahatlar — SEO va AI vositalaridan ijtimoiy tarmoq va reklama kampaniyalarigacha.",
		'blog.allArticles': 'Barcha Maqolalar',
		'blog.featured': 'Tanlangan Maqola',
		'blog.newsletterTitle': "Haftalik Raqamli O'sish Maslahatlarini Oling",
		'blog.newsletterSubtitle':
			"Har seshanba eng yaxshi strategiyalarimizni oladigan 3,000+ kichik biznes egalariga qo'shiling. Spam yo'q, istalgan vaqtda obunani bekor qiling.",
		'blog.subscribe': "Obuna bo'lish",
		'blog.emailPlaceholder': 'email@sizning.uz',
		// Posts
		'blog.p1.category': 'AI va Avtomatlashtirish',
		'blog.p1.title':
			"AI Chatbotlar Kichik Bizneslar Mijozlarga Xizmat Ko'rsatishni O'zgartirmoqda: 5 Yo'l",
		'blog.p1.excerpt':
			"AI chatbotlar endi faqat korporativ kompaniyalar uchun emas. Oyiga $99 bo'lgan chatbot mijozlar savollarining 80% ga darhol qanday javob berishi mumkinligini bilib oling — hatto ertalab soat 3 da ham.",
		'blog.p1.date': '20 Fevral, 2026',
		'blog.p1.readTime': "5 daqiqa o'qish",
		'blog.p2.category': 'SEO',
		'blog.p2.title':
			"Mahalliy Biznesingiz Nima Uchun Google'da Ko'rinmayapti (Va Uni Qanday Tuzatish Mumkin)",
		'blog.p2.excerpt':
			"Ko'plab kichik bizneslar ularni Google'da ko'rinmas qilib qo'yadigan 3 ta asosiy SEO asoslarini o'tkazib yuboradi. Mahalliy qidiruv reytinglaringizni tezda tuzatish uchun amaliy tekshiruv ro'yхati.",
		'blog.p2.date': '14 Fevral, 2026',
		'blog.p2.readTime': "7 daqiqa o'qish",
		'blog.p3.category': 'Ijtimoiy Tarmoq',
		'blog.p3.title':
			'Kichik Biznes Ijtimoiy Tarmoqlari Uchun 2026 Kontent Taqvimi Shabloni',
		'blog.p3.excerpt':
			"Nima post qilishni taxmin qilishni to'xtating. Bepul kontent taqvimi shablonimizni yuklab oling va charchashsiz izchil jalb qilishni ta'minlaydigan 3-2-1 post formulasini o'rganing.",
		'blog.p3.date': '7 Fevral, 2026',
		'blog.p3.readTime': "4 daqiqa o'qish",
		'blog.p4.category': 'Veb Ishlab Chiqish',
		'blog.p4.title':
			'Mobil-Birinchi vs Moslashuvchan Dizayn: Biznesingiz Uchun Aslida Nima Muhim',
		'blog.p4.excerpt':
			"Mijozlaringizning 65% mobilda ko'rib chiqmoqda. Har bir qurilmada mukammal ko'rinadigan va ishlayдиgan sayt qurish haqida bilishingiz kerak bo'lgan narsa.",
		'blog.p4.date': '28 Yanvar, 2026',
		'blog.p4.readTime': "6 daqiqa o'qish",
		'blog.p5.category': 'Email Marketing',
		'blog.p5.title':
			'Bitta Email Ketma-Ketligidan $22K Daromad Qanday Qazonganmiz (Qadam-bа-Qadam)',
		'blog.p5.excerpt':
			"Email marketingning ROI 4200% — lekin faqat to'g'ri vaqtda to'g'ri emaillar yuborsangiz. Biz mijozlarimiz uchun foydalanadigan aniq 7-email xush kelibsiz ketma-ketligini tahlil qilamiz.",
		'blog.p5.date': '20 Yanvar, 2026',
		'blog.p5.readTime': "8 daqiqa o'qish",
		'blog.p6.category': 'Marketing',
		'blog.p6.title':
			'Google Ads vs Meta Ads: 2026 Yilda Kichik Biznesingiz Uchun Qaysi Biri Yaxshiroq?',
		'blog.p6.excerpt':
			"Ikkala platforma ham ishlaydi — lekin turli maqsadlar va sohalarda. Reklama byudjetingizni qayerga birinchi qo'yishni hal qilishga yordam beradigan aniq tahlil.",
		'blog.p6.date': '12 Yanvar, 2026',
		'blog.p6.readTime': "6 daqiqa o'qish",

		// CTA Section
		'cta.badge': 'Bu oyda cheklangan joylar mavjud',
		'cta.title': "Biznesingizni Raqamli Bilan O'stirishga Tayyormisiz?",
		'cta.subtitle':
			"Bepul 30 daqiqalik strategiya qo'ng'irog'ini band qiling. Joriy raqamli mavjudligingizni tahlil qilamiz va qanday o'sish mumkinligini aniq ko'rsatamiz — majburiyatlar yo'q, ortiqcha gap yo'q.",
		'cta.primary': "Bepul Strategiya Qo'ng'irog'ini Band Qiling",
		'cta.secondary': "Xizmatlarni Ko'rish",
		'cta.disclaimer':
			'Shartnoma kerak emas. Istalgan vaqtda bekor qilish mumkin.',

		// Logo Cloud
		'logoCloud.title': 'Etakchi Kompaniyalar Tomonidan Ishonilgan',
		'logoCloud.subtitle':
			"Startup'lar dan Fortune 500 kompaniyalarigacha bizneslarni rivojlantirish",
		'logoCloud.button': 'Bizning mijozlarni koʻring',

		// Footer
		'footer.tagline': 'Biznesingiz uchun Innovatsion Yechimlar',
		'footer.services': 'Xizmatlar',
		'footer.products': 'Mahsulotlar',
		'footer.company': 'Kompaniya',
		'footer.resources': 'Resurslar',
		'footer.follow': 'Kuzatish',
		'footer.webDev': 'App va Veb Ishlab Chiqarish',
		'footer.backendEng': 'AI Chatbotlar va Avtomatlashtirish',
		'footer.cloudSol': 'SEO va E-tijorat',
		'footer.apiDev': 'Ijtimoiy Tarmoq Boshqaruvi',
		'footer.consulting': 'Email Marketing',
		'footer.support': "Qo'llab-Quvvatlash",
		'footer.training': 'Oʻqitish',
		'footer.webApps': 'Veb Ilova',
		'footer.mobileSol': 'Mobil Yechim',
		'footer.enterpriseSys': 'Korporativ Tizimlar',
		'footer.devopsTools': 'DevOps Vositalari',
		'footer.documentation': 'Hujjatlar',
		'footer.caseStudies': 'Ishi Oʻrganish',
		'footer.resources2': 'Resurslar',
		'footer.aboutUs': 'Biz Haqimizda',
		'footer.ourTeam': 'Bizning Jamoa',
		'footer.careers': 'Karyera',
		'footer.blog': 'Blog',
		'footer.news': 'Yangiliklar',
		'footer.achievements': 'Yutuqlar',
		'footer.brand': 'Brend',
		'footer.developers': 'Ishlab Chiqaruvchilar',
		'footer.github': 'GitHub',
		'footer.reportIssue': 'Muammoni Xabar Qiling',
		'footer.privacyPolicy': 'Xususiylik Siyosati',
		'footer.termsOfService': 'Xizmat Shartlari',
		'footer.contact': "Bog'lanish",
		'footer.contactUs': "Biz bilan bog'lanish",
		'footer.email': 'Email',
		'footer.linkedIn': 'LinkedIn',
		'footer.website': 'Veb-sayt',
		'footer.rights':
			'© 2026 Vision Digital Group. Barcha huquqlar himoyalangan.',
		'footer.sitemap': 'Sayt Xaritasi',
		'footer.cat.services': 'Xizmatlar',
		'footer.cat.company': 'Kompaniya',
		'footer.cat.connect': "Bog'lanish",
		'footer.cat.legal': 'Huquqiy',
		'footer.link.appDev': 'Ilova Ishlab Chiqish',
		'footer.link.webDev': 'Veb Ishlab Chiqish',
		'footer.link.aiChatbots': 'AI Chatbotlar',
		'footer.link.crm': 'CRM Tizimlari',
		'footer.link.seo': 'SEO va E-tijorat',
		'footer.link.social': 'Ijtimoiy Tarmoq',
		'footer.link.email': 'Email Marketing',
		'footer.link.about': 'Biz Haqimizda',
		'footer.link.cases': 'Muvaffaqiyat Tariхlari',
		'footer.link.blog': 'Blog va Tahlillar',
		'footer.link.contact': "Biz bilan Bog'laning",
		'footer.link.instagram': 'Instagram',
		'footer.link.linkedin': 'LinkedIn',
		'footer.link.facebook': 'Facebook',
		'footer.link.privacy': 'Xususiylik Siyosati',
		'footer.link.terms': 'Xizmat Shartlari',
		'footer.taglineSmall': 'Kichik Bizneslar uchun Innovatsion Yechimlar',

		// Contact Section
		'contact.title': "Biznesingizni O'stirishga Tayyor?",
		'contact.subtitle':
			"Keling, birgalikda ajoyib narsa yarataylik — birinchi g'oyangizdan to to'liq raqamli tizimgacha",
		'contact.email': 'visiondigitalgroup01@gmail.com',
		'contact.phone': '+998 88 161 18 08',
		'contact.location': 'Toshkent',
		'contact.sendTitle': 'Bizga xabar yuboring',
		'contact.sendSubtitle':
			'Odatda 24 soat ichida javob beramiz. Biznesingiz va ehtiyojlaringiz haqida ayting.',
		'contact.name': 'Ism',
		'contact.namePlaceholder': 'Ismingiz',
		'contact.emailLabel': 'Email',
		'contact.subject': 'Mavzu',
		'contact.subjectPlaceholder': "Loyiha so'rovi",
		'contact.message': 'Xabar',
		'contact.messagePlaceholder': 'Loyihangiz haqida ayting...',
		'contact.send': 'Xabar Yuborish',
		'contact.successMsg':
			'Xabaringiz uchun rahmat! Tez orada javob beramiz.',

		// Theme
		'theme.light': "Yorug'",
		'theme.dark': "Qorong'u",
	},
}

export function getTranslation(language: Language, key: string): string {
	return translations[language][key] || key
}
