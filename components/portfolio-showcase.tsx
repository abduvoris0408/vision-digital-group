'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe } from 'lucide-react'

export function PortfolioShowcase() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'High-performance online store with real-time inventory management and payment integration.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      metrics: '2M+ transactions',
      highlight: true
    },
    {
      title: 'Mobile Health App',
      description: 'Cross-platform mobile application for fitness tracking and wellness management.',
      tech: ['React Native', 'Firebase', 'TypeScript'],
      metrics: '500K+ users'
    },
    {
      title: 'Enterprise Dashboard',
      description: 'Real-time analytics dashboard for monitoring business metrics and KPIs.',
      tech: ['Next.js', 'PostgreSQL', 'Recharts', 'WebSockets'],
      metrics: '50+ clients'
    },
    {
      title: 'SaaS Platform',
      description: 'Scalable software-as-a-service solution with multi-tenant architecture.',
      tech: ['Next.js', 'Prisma', 'AWS', 'Stripe'],
      metrics: '$1M+ ARR'
    },
    {
      title: 'AI Content Generator',
      description: 'Machine learning-powered content creation tool with advanced NLP capabilities.',
      tech: ['Python', 'FastAPI', 'React', 'OpenAI'],
      metrics: '100K+ generated content pieces'
    },
    {
      title: 'Real-Time Collaboration Tool',
      description: 'Live document editing and team communication platform with real-time sync.',
      tech: ['WebSockets', 'MongoDB', 'React', 'Node.js'],
      metrics: '50K+ teams'
    }
  ]

  return (
    <section id="products" className="relative py-40 px-6 bg-white dark:bg-[#09090B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-zinc-400 text-sm">Client Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-medium text-zinc-900 dark:text-zinc-200 mb-6 max-w-3xl"
            style={{
              letterSpacing: '-0.0325em',
              lineHeight: 1.1,
            }}
          >
            Projects we're proud of
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl"
          >
            From innovative startups to established enterprises, we've helped diverse clients achieve their digital transformation goals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group rounded-xl border transition-all ${
                project.highlight
                  ? 'md:col-span-2 lg:col-span-1 border-blue-500/30 bg-blue-950/20 hover:border-blue-500/50'
                  : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
              }`}
            >
              <div className="p-6">
                {project.highlight && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/30 text-blue-300 text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}

                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-100 dark:text-zinc-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 pb-4 border-t border-zinc-800">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 dark:bg-zinc-700 text-zinc-100 dark:text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-blue-400">
                    {project.metrics}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
