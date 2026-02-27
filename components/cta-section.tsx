'use client'

import { useLanguage } from '@/contexts/language-context'

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#09090B] border-t border-gray-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-gray-900 dark:text-white tracking-tight">
            Ready to build something amazing?
          </h2>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors text-sm">
              View services
            </button>
            <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm">
              Start now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
