'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Globe, Smartphone, Bot, BarChart2, Search, Mail, Instagram, MessageCircle,
  ChevronRight, Zap, CheckCircle
} from 'lucide-react'

const serviceCategories = [
  {
    id: 'development',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
    label: 'App & Web Development',
    tagline: 'Build your digital foundation',
    description:
      'We design and develop professional websites and mobile apps that are fast, beautiful, and built to convert visitors into customers.',
    features: [
      'Custom website design & development',
      'Mobile app development (iOS & Android)',
      'E-commerce store setup & optimization',
      'Landing pages that convert',
      'Website speed & performance tuning',
      'Hosting, maintenance & updates',
    ],
    highlight: 'Websites from $999 — delivered in 2 weeks',
  },
  {
    id: 'ai-automation',
    icon: Bot,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    iconColor: 'text-purple-500',
    label: 'AI & Automation',
    tagline: 'Work smarter, not harder',
    description:
      'Deploy AI chatbots, personalized automation, and smart CRM systems that handle customer interactions, follow-ups, and internal tasks — 24/7.',
    features: [
      'AI Chatbot for your website or app',
      'Personalized AI assistant for internal tasks',
      'CRM setup, automation & management',
      'AI-powered lead capture & follow-up',
      'Email automation workflows',
      'Smart scheduling & appointment bots',
    ],
    highlight: 'AI chatbots that respond in seconds, close leads while you sleep',
  },
  {
    id: 'marketing',
    icon: BarChart2,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
    label: 'Marketing & Growth',
    tagline: 'Get found. Get leads. Get sales.',
    description:
      'From SEO and Google Ads to social media management and email campaigns — we handle your entire marketing engine so you can focus on running your business.',
    features: [
      'SEO for local & national brands',
      'Google & Meta ad campaign management',
      'Social media content & scheduling',
      'Email marketing & newsletter setup',
      'Audience targeting & retargeting',
      'Monthly performance reports & insights',
    ],
    highlight: 'Average 3x ROI on ad spend within 90 days',
  },
]

const allServices = [
  { icon: Globe, label: 'Web Development' },
  { icon: Smartphone, label: 'App Development' },
  { icon: Bot, label: 'AI Chatbots' },
  { icon: MessageCircle, label: 'CRM Systems' },
  { icon: Search, label: 'SEO & E-commerce' },
  { icon: BarChart2, label: 'Ad Campaigns' },
  { icon: Instagram, label: 'Social Media' },
  { icon: Mail, label: 'Email Marketing' },
  { icon: Zap, label: 'Workflow Automation' },
]

export function ServicesSection() {
  const [active, setActive] = useState('development')
  const activeService = serviceCategories.find((s) => s.id === active)!

  return (
    <section
      id="services"
      className="relative py-32 px-6 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30 dark:opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <Zap className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-sm text-blue-500 font-medium">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything Your Business Needs
          </h2>
          <p className="text-gray-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            One agency, one team, one goal — to grow your business online with the right tools, strategy, and execution.
          </p>
        </motion.div>

        {/* All service pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {allServices.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full text-sm text-gray-600 dark:text-zinc-400 hover:border-blue-400 hover:text-blue-500 transition-colors cursor-default"
            >
              <s.icon className="w-4 h-4" />
              {s.label}
            </div>
          ))}
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all ${
                active === cat.id
                  ? 'bg-gradient-to-r ' + cat.color + ' text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-zinc-400 hover:border-gray-300 dark:hover:border-zinc-600'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active service detail */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 ${activeService.bgColor} rounded-full mb-6`}>
                <activeService.icon className={`w-4 h-4 ${activeService.iconColor}`} />
                <span className={`text-sm font-medium ${activeService.iconColor}`}>{activeService.tagline}</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {activeService.label}
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed mb-8">
                {activeService.description}
              </p>
              {/* Highlight */}
              <div className={`bg-gradient-to-r ${activeService.color} p-px rounded-2xl`}>
                <div className="bg-white dark:bg-zinc-900 rounded-2xl px-5 py-4">
                  <p className="text-sm font-medium text-gray-700 dark:text-zinc-300">
                    💡 {activeService.highlight}
                  </p>
                </div>
              </div>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${activeService.color} text-white font-medium rounded-xl hover:opacity-90 transition-opacity text-sm`}
              >
                Get Started
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Feature list */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-zinc-500 uppercase tracking-wider mb-6">
                What's Included
              </h4>
              {activeService.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className={`w-5 h-5 ${activeService.iconColor} shrink-0 mt-0.5`} />
                  <span className="text-gray-700 dark:text-zinc-300 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
