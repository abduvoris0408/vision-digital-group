'use client'

import { Code2 } from "lucide-react"
import { useLanguage } from '@/contexts/language-context'

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    Services: [t('footer.webDev'), t('footer.backendEng'), t('footer.cloudSol'), t('footer.apiDev'), t('footer.consulting'), t('footer.support'), t('footer.training')],
    Products: [t('footer.webApps'), t('footer.mobileSol'), t('footer.enterpriseSys'), t('footer.devopsTools'), t('footer.documentation'), t('footer.caseStudies'), t('footer.resources2')],
    Company: [t('footer.aboutUs'), t('footer.ourTeam'), t('footer.careers'), t('footer.blog'), t('footer.news'), t('footer.achievements'), t('footer.brand')],
    Resources: [t('footer.developers'), t('footer.documentation'), t('footer.github'), t('footer.reportIssue'), t('footer.privacyPolicy'), t('footer.termsOfService'), t('footer.contact')],
    Follow: [t('footer.contactUs'), t('footer.email'), t('footer.linkedIn'), t('footer.github'), t('footer.website')],
  }

  const categoryNames = {
    Services: t('footer.services'),
    Products: t('footer.products'),
    Company: t('footer.company'),
    Resources: t('footer.resources'),
    Follow: t('footer.follow'),
  }

  return (
    <footer className="border-t border-gray-200 dark:border-zinc-800 py-16 px-6 bg-gray-50 dark:bg-[#09090B] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12 pb-12 border-b border-gray-200 dark:border-zinc-800">
          {/* Logo Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-blue-500" />
              <span className="text-gray-900 dark:text-white font-bold text-lg">Digital Group</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-zinc-500">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h3 className="text-gray-900 dark:text-white font-semibold text-sm mb-4">{categoryNames[key as keyof typeof categoryNames]}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-200 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 dark:text-zinc-500">
            {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-600 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-zinc-300 transition-colors">{t('footer.privacyPolicy')}</a>
            <span className="text-gray-300 dark:text-zinc-700">•</span>
            <a href="#" className="text-xs text-gray-600 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-zinc-300 transition-colors">{t('footer.termsOfService')}</a>
            <span className="text-gray-300 dark:text-zinc-700">•</span>
            <a href="#" className="text-xs text-gray-600 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-zinc-300 transition-colors">{t('footer.sitemap')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
