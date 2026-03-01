'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Zap } from 'lucide-react'

export function TechnologiesShowcase() {
  const technologies = [
    {
      category: 'Frontend',
      icon: Code2,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
      color: 'from-blue-500/10 to-blue-600/10'
    },
    {
      category: 'Backend',
      icon: Database,
      items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
      color: 'from-purple-500/10 to-purple-600/10'
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel'],
      color: 'from-orange-500/10 to-orange-600/10'
    },
    {
      category: 'Tools & Services',
      icon: Zap,
      items: ['Git', 'Figma', 'Jira', 'Stripe', 'SendGrid'],
      color: 'from-green-500/10 to-green-600/10'
    }
  ]

  return (
    <section id="blog" className="relative py-40 px-6 bg-white dark:bg-[#09090B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-zinc-400 text-sm">Our Technology Stack</span>
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
            Modern tools built for performance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl"
          >
            We use cutting-edge technologies to build scalable, reliable, and maintainable solutions that stand the test of time.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-zinc-700 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-zinc-800/50">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-200">
                    {tech.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="text-sm text-zinc-100 dark:text-zinc-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 dark:bg-zinc-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Code Editor Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 p-1"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />
          <img
            src="/images/code-editor.png"
            alt="Code editor showcase"
            className="w-full h-auto rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
