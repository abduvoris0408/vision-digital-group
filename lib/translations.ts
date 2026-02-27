export type Language = 'en' | 'uz';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.technologies': 'Technologies',
    'nav.portfolio': 'Portfolio',
    'nav.getInTouch': 'Get in touch',
    'nav.selectLanguage': 'Select Language',

    // Hero Section
    'hero.title': 'Enterprise Solutions for Modern Business',
    'hero.subtitle': 'Transform your digital presence with cutting-edge technology and expert guidance',
    'hero.cta': 'Start Your Journey',
    'hero.secondary': 'Learn More',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive digital solutions tailored to your needs',
    'services.webDev': 'Web Development',
    'services.webDevDesc': 'Modern, responsive web applications built with latest technologies',
    'services.backend': 'Backend Engineering',
    'services.backendDesc': 'Scalable server solutions and API development',
    'services.cloud': 'Cloud Solutions',
    'services.cloudDesc': 'AWS, Azure, and GCP infrastructure management',
    'services.mobile': 'Mobile Development',
    'services.mobileDesc': 'Native and cross-platform mobile applications',
    'services.consulting': 'Technical Consulting',
    'services.consultingDesc': 'Expert advice for digital transformation',

    // Logo Cloud
    'logoCloud.title': 'Trusted by Leading Companies',
    'logoCloud.subtitle': 'Empowering businesses from startups to Fortune 500 companies',
    'logoCloud.button': 'Meet our customers',

    // Footer
    'footer.tagline': 'Transforming ideas into exceptional digital solutions',
    'footer.services': 'Services',
    'footer.products': 'Products',
    'footer.company': 'Company',
    'footer.resources': 'Resources',
    'footer.follow': 'Follow',
    'footer.webDev': 'Web Development',
    'footer.backendEng': 'Backend Engineering',
    'footer.cloudSol': 'Cloud Solutions',
    'footer.apiDev': 'API Development',
    'footer.consulting': 'Consulting',
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
    'footer.rights': '© 2026 Digital Group. All rights reserved.',
    'footer.sitemap': 'Sitemap',

    // Contact Section
    'contact.title': 'Ready to Get Started?',
    'contact.subtitle': 'Let\'s work together to transform your vision into reality',
    'contact.email': 'contact@digitalgroup.com',
    'contact.phone': '+1 (555) 123-4567',
    'contact.location': 'San Francisco, California',

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
    'nav.getInTouch': 'Bog\'lanish',
    'nav.selectLanguage': 'Tilni Tanlang',

    // Hero Section
    'hero.title': 'Zamonaviy Biznes Uchun Korporativ Yechimlar',
    'hero.subtitle': 'Raqamli mavjudligingizni eng yangi texnologiya va ekspert rahbarlik bilan o\'zgartiring',
    'hero.cta': 'Safarni Boshlang',
    'hero.secondary': 'Ko\'proq Ma\'lumot',

    // Services Section
    'services.title': 'Bizning Xizmatlar',
    'services.subtitle': 'Sizning ehtiyojlaringizga mos keladigan keng qo\'lamli raqamli yechimlar',
    'services.webDev': 'Veb Ishlab Chiqarish',
    'services.webDevDesc': 'Eng yangi texnologiyalar bilan yaratilgan zamonaviy, responsive veb-ilova',
    'services.backend': 'Backend Muhandisligi',
    'services.backendDesc': 'Масштабируемое решение сервера и разработка API',
    'services.cloud': 'Bulut Yechim',
    'services.cloudDesc': 'AWS, Azure va GCP altyapisi boshqaruvi',
    'services.mobile': 'Mobil Ishlab Chiqarish',
    'services.mobileDesc': 'Native va cross-platform mobil ilova',
    'services.consulting': 'Texnik Konsultatsiya',
    'services.consultingDesc': 'Raqamli transformatsiya uchun ekspert maslahat',

    // Logo Cloud
    'logoCloud.title': 'Etakchi Kompaniyalar Tomonidan Ishonilgan',
    'logoCloud.subtitle': 'Startup\'lar dan Fortune 500 kompaniyalarigacha bizneslarni rivojlantirish',
    'logoCloud.button': 'Bizning mijozlarni koʻring',

    // Footer
    'footer.tagline': 'Ideyalarni istisnoi raqamli yechimlarga aylantirish',
    'footer.services': 'Xizmatlar',
    'footer.products': 'Mahsulotlar',
    'footer.company': 'Kompaniya',
    'footer.resources': 'Resurslar',
    'footer.follow': 'Kuzatish',
    'footer.webDev': 'Veb Ishlab Chiqarish',
    'footer.backendEng': 'Backend Muhandisligi',
    'footer.cloudSol': 'Bulut Yechim',
    'footer.apiDev': 'API Ishlab Chiqarish',
    'footer.consulting': 'Konsultatsiya',
    'footer.support': 'Qo\'llab-Quvvatlash',
    'footer.training': 'Oʻqitish',
    'footer.webApps': 'Veb Ilova',
    'footer.mobileSol': 'Mobil Yechim',
    'footer.enterpriseSys': 'Korporativ Tizimlar',
    'footer.devopsTools': 'DevOps Vositalari',
    'footer.documentation': 'Hujjatlar',
    'footer.caseStudies': 'Ishi Oʻrganish',
    'footer.resources2': 'Resurslar',
    'footer.aboutUs': 'Biz Haqida',
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
    'footer.contact': 'Bog\'lanish',
    'footer.contactUs': 'Biz bilan bog\'lanish',
    'footer.email': 'Email',
    'footer.linkedIn': 'LinkedIn',
    'footer.website': 'Veb-sayt',
    'footer.rights': '© 2026 Raqamli Guruh. Barcha huquqlar himoyalangan.',
    'footer.sitemap': 'Sayt Xaritasi',

    // Contact Section
    'contact.title': 'Boshlashga Tayyor?',
    'contact.subtitle': 'Keling, sizning fikringizni haqiqatga aylantirish uchun birga ishlaymiz',
    'contact.email': 'contact@digitalgroup.com',
    'contact.phone': '+1 (555) 123-4567',
    'contact.location': 'San-Fransisko, Kaliforniya',

    // Theme
    'theme.light': 'Yorug\'',
    'theme.dark': 'Qorong\'u',
  },
};

export function getTranslation(language: Language, key: string): string {
  return translations[language][key] || key;
}
