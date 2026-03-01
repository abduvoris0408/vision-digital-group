'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowUpRight, Tag } from 'lucide-react'

const posts = [
  {
    id: 1,
    category: 'AI & Automation',
    categoryColor: 'text-purple-500 bg-purple-500/10',
    title: '5 Ways AI Chatbots Are Changing How Small Businesses Handle Customer Service',
    excerpt:
      'AI chatbots are no longer just for enterprise companies. Learn how a $99/month chatbot can respond to 80% of customer questions instantly — even at 3am.',
    date: 'Feb 20, 2026',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    category: 'SEO',
    categoryColor: 'text-emerald-500 bg-emerald-500/10',
    title: 'Why Your Local Business Isn\'t Showing Up on Google (And How to Fix It)',
    excerpt:
      'Most small businesses miss 3 key SEO fundamentals that keep them invisible on Google. Here\'s a practical checklist to fix your local search rankings fast.',
    date: 'Feb 14, 2026',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 3,
    category: 'Social Media',
    categoryColor: 'text-pink-500 bg-pink-500/10',
    title: 'The 2026 Content Calendar Template for Small Business Social Media',
    excerpt:
      'Stop guessing what to post. Download our free content calendar template and learn the 3-2-1 posting formula that gets consistent engagement without burning out.',
    date: 'Feb 7, 2026',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 4,
    category: 'Web Development',
    categoryColor: 'text-blue-500 bg-blue-500/10',
    title: 'Mobile-First vs Responsive Design: What Actually Matters for Your Business',
    excerpt:
      '65% of your customers are browsing on mobile. Here\'s what you need to know about building a website that looks and performs perfectly on every device.',
    date: 'Jan 28, 2026',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 5,
    category: 'Email Marketing',
    categoryColor: 'text-orange-500 bg-orange-500/10',
    title: 'How We Generated $22K in Revenue from One Email Sequence (Step-by-Step)',
    excerpt:
      'Email marketing has a 4200% ROI — but only if you send the right emails at the right time. We break down the exact 7-email welcome sequence we use for our clients.',
    date: 'Jan 20, 2026',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 6,
    category: 'Marketing',
    categoryColor: 'text-cyan-500 bg-cyan-500/10',
    title: 'Google Ads vs Meta Ads: Which Is Better for Your Small Business in 2026?',
    excerpt:
      'Both platforms work — but for different goals and industries. Here\'s a no-fluff breakdown to help you decide where to put your ad budget first.',
    date: 'Jan 12, 2026',
    readTime: '6 min read',
    featured: false,
  },
]

export function BlogSection() {
  const featured = posts.find((p) => p.featured)!
  const rest = posts.filter((p) => !p.featured)

  return (
    <section
      id="blog"
      className="relative py-32 px-6 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/5 to-transparent rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-blue-500 font-medium">Blog & Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Tips, Strategies &<br />Digital Insights
            </h2>
            <p className="text-gray-500 dark:text-zinc-400 max-w-xl">
              Practical advice to help small businesses grow online — from SEO and AI tools to social media and ad campaigns.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm font-medium text-gray-700 dark:text-zinc-300 hover:border-blue-400 hover:text-blue-500 transition-colors shrink-0">
            All Articles
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Featured post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 md:p-12 mb-6 cursor-pointer group hover:shadow-2xl hover:shadow-blue-500/20 transition-all"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full mb-5">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                Featured Article
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-blue-100 transition-colors">
                {featured.title}
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6 max-w-2xl">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 text-blue-200 text-xs">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>
            </div>
            <div className="shrink-0">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rest of posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 cursor-pointer hover:border-blue-400/50 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all group"
            >
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${post.categoryColor} mb-4`}>
                {post.category}
              </span>
              <h3 className="font-bold text-gray-900 dark:text-white text-base mb-3 leading-snug group-hover:text-blue-500 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-zinc-500 leading-relaxed mb-5 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-400 dark:text-zinc-600">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
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
          className="mt-12 bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Get Weekly Digital Growth Tips
          </h3>
          <p className="text-gray-500 dark:text-zinc-500 text-sm mb-6 max-w-md mx-auto">
            Join 3,000+ small business owners who get our best strategies every Tuesday. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-sm text-gray-700 dark:text-zinc-300 focus:outline-none focus:border-blue-400 transition-colors"
            />
            <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
