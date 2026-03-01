'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, ShoppingCart, MessageSquare, ArrowUpRight, Star } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    category: 'Web Development + SEO',
    client: 'Local Restaurant Chain',
    title: 'From Zero Online Presence to $40K/Month in Online Orders',
    story:
      "A 3-location restaurant had no website and zero online ordering. We built a fast, mobile-first site with online ordering integrated, ran local SEO, and set up Google Ads. Within 4 months, they were getting 800+ online orders per month.",
    metrics: [
      { icon: ShoppingCart, value: '800+', label: 'Orders/month' },
      { icon: TrendingUp, value: '340%', label: 'Revenue growth' },
      { icon: Star, value: '4.9', label: 'Google rating' },
    ],
    tags: ['Web Dev', 'SEO', 'Google Ads'],
    color: 'from-orange-500 to-pink-500',
    highlight: true,
  },
  {
    id: 2,
    category: 'AI Chatbot + CRM',
    client: 'Real Estate Agency',
    title: 'AI Chatbot Tripled Lead Conversion Without Extra Staff',
    story:
      "A real estate agency was losing leads after hours. We deployed an AI chatbot that answers property questions, qualifies leads, and books showings 24/7. Combined with CRM automation, their conversion rate went from 8% to 27%.",
    metrics: [
      { icon: TrendingUp, value: '27%', label: 'Conversion rate (was 8%)' },
      { icon: MessageSquare, value: '500+', label: 'Leads captured/month' },
      { icon: Users, value: '3x', label: 'More showings booked' },
    ],
    tags: ['AI Chatbot', 'CRM', 'Automation'],
    color: 'from-purple-500 to-blue-500',
    highlight: false,
  },
  {
    id: 3,
    category: 'Social Media + Email Marketing',
    client: 'Fashion Boutique',
    title: '0 to 25K Instagram Followers & 5x Email Revenue in 6 Months',
    story:
      "A small clothing boutique had 400 Instagram followers and barely used email. We took over their social media, created weekly content, built a segmented email list, and ran targeted Meta ads. Six months later, they had 25K followers and email was their #1 revenue channel.",
    metrics: [
      { icon: TrendingUp, value: '25K', label: 'Instagram followers' },
      { icon: ShoppingCart, value: '5x', label: 'Email revenue' },
      { icon: Users, value: '12K', label: 'Email subscribers' },
    ],
    tags: ['Social Media', 'Email Marketing', 'Meta Ads'],
    color: 'from-pink-500 to-purple-500',
    highlight: false,
  },
  {
    id: 4,
    category: 'App Development',
    client: 'Fitness Studio',
    title: 'Custom App Replaced 4 Tools & Saved $3K/Month in Software Costs',
    story:
      "A gym was paying for separate booking, payments, loyalty, and communication tools. We built a single custom mobile app that handles everything — membership, class booking, trainer chat, and push notifications — cutting their costs and improving the member experience dramatically.",
    metrics: [
      { icon: TrendingUp, value: '$3K', label: 'Saved monthly on software' },
      { icon: Users, value: '95%', label: 'App adoption rate' },
      { icon: Star, value: '4.8', label: 'App Store rating' },
    ],
    tags: ['App Dev', 'Mobile', 'UX Design'],
    color: 'from-cyan-500 to-teal-500',
    highlight: false,
  },
]

export function CaseStudiesSection() {
  return (
    <section
      id="portfolio"
      className="relative py-32 px-6 bg-white dark:bg-[#09090B] transition-colors duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-emerald-500 font-medium">Real Results</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Client Success Stories
              </h2>
              <p className="text-gray-500 dark:text-zinc-400 max-w-xl text-lg">
                Real businesses, real results. Here's how Vision Digital Group helped small businesses grow with the right digital strategy.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium text-sm hover:opacity-80 transition-opacity shrink-0"
            >
              Start Your Story
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Case studies grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-gray-50 dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:border-gray-300 dark:hover:border-zinc-700 transition-all group ${
                cs.highlight ? 'md:col-span-2' : ''
              }`}
            >
              {/* Gradient strip on top */}
              <div className={`h-1 w-full bg-gradient-to-r ${cs.color}`} />

              <div className={`p-8 ${cs.highlight ? 'md:grid md:grid-cols-2 md:gap-10' : ''}`}>
                <div>
                  {/* Category + tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${cs.color} text-white`}>
                      {cs.category}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-zinc-500">{cs.client}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-zinc-500 leading-relaxed mb-6">
                    {cs.story}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full text-gray-600 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className={`${cs.highlight ? 'flex flex-col justify-center mt-8 md:mt-0' : 'mt-8'}`}>
                  <div className={`grid ${cs.highlight ? 'grid-cols-1 gap-4' : 'grid-cols-3 gap-4'}`}>
                    {cs.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="bg-white dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-800 rounded-2xl p-4 text-center"
                      >
                        <metric.icon className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                        <div className={`text-2xl font-bold bg-gradient-to-r ${cs.color} bg-clip-text text-transparent mb-1`}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-zinc-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 dark:text-zinc-500 mb-4">Ready to be our next success story?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Let's Talk About Your Business
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
