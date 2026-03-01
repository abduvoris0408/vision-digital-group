'use client'

import { motion } from 'framer-motion'
import { Target, Users, Zap, Award } from 'lucide-react'

const stats = [
  { value: '150+', label: 'Small Businesses Helped' },
  { value: '98%', label: 'Client Satisfaction Rate' },
  { value: '3x', label: 'Average Revenue Growth' },
  { value: '24/7', label: 'AI & Support Coverage' },
]

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: "We don't just build — we track performance, optimize campaigns, and make sure every dollar you invest works harder for your business.",
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Users,
    title: 'Small Business First',
    description: 'We specialize in small businesses. Our solutions are built to scale with you — affordable today, powerful as you grow.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Zap,
    title: 'AI-Powered Efficiency',
    description: 'From AI chatbots to personalized automation, we bring enterprise-level intelligence to businesses of any size.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Award,
    title: 'Full-Service Partner',
    description: 'One team handles everything — your website, apps, ads, SEO, CRM, and content. No juggling multiple agencies.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 bg-white dark:bg-[#09090B] transition-colors duration-300 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm text-blue-500 font-medium tracking-wider uppercase">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              We Grow Small Businesses with{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Smart Digital Tools
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed mb-6">
              Vision Digital Group was built with one mission: give small businesses access to the same powerful digital tools that big corporations use — without the big price tag or complexity.
            </p>
            <p className="text-gray-500 dark:text-zinc-500 leading-relaxed">
              We're a full-service digital agency that handles your entire online presence — from building your website and mobile app to managing your social media, running AI chatbots, optimizing your SEO, and running targeted ad campaigns that convert.
            </p>
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors text-sm"
              >
                Work With Us
              </button>
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 hover:border-blue-500 hover:text-blue-500 rounded-xl transition-colors text-sm font-medium"
              >
                See Our Work
              </button>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-gray-50 dark:bg-zinc-900/60 border border-gray-100 dark:border-zinc-800 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-colors"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Why Clients Choose Us</h3>
            <p className="text-gray-500 dark:text-zinc-500">What makes Vision Digital Group different from every other agency</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 dark:bg-zinc-900/40 border border-gray-100 dark:border-zinc-800 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-gray-100 dark:hover:bg-zinc-900/70 transition-all group"
              >
                <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500 dark:text-zinc-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
